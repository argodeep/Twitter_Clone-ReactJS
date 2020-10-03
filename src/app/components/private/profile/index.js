import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SVG from 'react-inlinesvg';
import { useParams } from 'react-router-dom';
import Loading from 'app/components/common/loading';
import Post from 'app/components/common/post';
import { getUser, getUsers, checkFollowing, followUser, unFollowUser } from 'app/api';
import Location from 'assets/img/location.svg';
import Calendar from 'assets/img/calendar.svg';
import './style.scss';

export default function Profile() {
    const [isLoading, setLoading] = useState(true);
    const [errorText, setErrorText] = useState('');
    const currentUser = useSelector(state => state.currentUser);
    const profile = useSelector(state => state.profile);
    const tweets = useSelector(state => state.userTweets);
    const following = useSelector(state => state.following);
    const dispatch = useDispatch();
    const params = useParams();

    async function initProfile() {
        document.title = 'Profile / Twitter';
        dispatch(getUsers());
        dispatch(checkFollowing(currentUser.id));
        const response = await dispatch(getUser(params.username));
        if (typeof response === 'string' && response === 'USER_NOT_FOUND') {
            setErrorText('User not found! Reload the page');
        }
        if (typeof response === 'object') {
            setLoading(false);
        }
    }

    function isThread(id) {
        return [...tweets].findIndex(tweet => tweet.forPost === id) !== -1
    }

    function connectionStatus() {
        const IamFollowing = following[currentUser.id];
        if (IamFollowing !== undefined) {
            if (IamFollowing[profile.id] !== undefined) {
                return true
            }
        }
        return false
    }

    function handleConnection(type) {
        setLoading(true)
        if (type === 'follow') {
            dispatch(followUser(currentUser.id, profile.id));
            following[currentUser.id] = {}
            following[currentUser.id][profile.id] = {
                date: new Date().toLocaleString()
            }
            connectionStatus()
        } else {
            dispatch(unFollowUser(currentUser.id, profile.id));
            delete following[currentUser.id][profile.id];
        }
        setLoading(() => {
            setLoading(false);
        },100)
    }

    useEffect(() => {
        initProfile();
        return () => {
            console.log('Profile unmounted');
            dispatch({
                type: 'GET_USER',
                user: null
            })
        }
    }, [params.username]);

    if (!profile) {
        return <Loading errorText={errorText} type="spinner" />
    }

    document.title = `${profile.name} (${profile.username}) / Twitter`;
    return (
        <React.Fragment>
            <div className="cover" style={{ backgroundImage: `url(${profile.cover_url})` }} />
            <div className="profile-area">
                <div className="avatar-profile" style={{ backgroundImage: `url(${profile.profile_image})` }}></div>
                {currentUser.id !== profile.id && connectionStatus() && <button className="unfollow" onClick={() => handleConnection('unfollow')}>Following</button>}
                {currentUser.id !== profile.id && !connectionStatus() && <button className="follow" onClick={() => handleConnection('follow')}>Follow</button>}
                <div className="profile">
                    <span className="profile-column">
                        <span className="name">{profile.name}</span>
                        <span className="username">@{profile.username}</span>
                    </span>
                </div>
                <p className="bio">{profile.bio}</p>
                <div className="profile-info">
                    {profile.location && <span className="actions">
                        <SVG alt="location-icon" src={Location} />
                        <span className="value">{profile.location}</span>
                    </span>
                    }
                    {profile.joined_at && <span className="actions">
                        <SVG alt="calendar-icon" src={Calendar} />
                        <span className="value">Joined {profile.joined_at}</span>
                    </span>
                    }
                </div>
                <div className="profile-stats">
                    <span>
                        <span className="value">{profile.following}</span>
                        <span className="unit">Following</span>
                    </span>
                    <span>
                        <span className="value">{profile.followers}</span>
                        <span className="unit">Followers</span>
                    </span>
                </div>
                <div className="profile-tabs">
                    <span className="active">Tweets</span>
                    <span>Tweets {'&'} Replies</span>
                    <span>Media</span>
                    <span>Likes</span>
                </div>
                {
                    isLoading && (
                        <div className="loading-home">
                            <Loading errorText={errorText} type="spinner" />
                        </div>
                    )
                }
                {
                    !isLoading && tweets.map((tweet, index) => (
                        <Post content={tweet} thread={isThread(tweet.id)} key={'t-' + index + tweet.id} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}
