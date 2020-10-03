import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';
import SVG from 'react-inlinesvg';
import Modal from '../backdrop-modal';
import Create from '../create-post';
import Down from 'assets/img/down.svg';
import AddComment from 'assets/img/add-comment.svg';
import Retweet from 'assets/img/add-retweet.svg';
import AddLike from 'assets/img/add-like.svg';
import Liked from 'assets/img/liked.svg';
import Share from 'assets/img/tweet-share.svg';
import Analytics from 'assets/img/analytics.svg';
import calculateTime from 'app/api/timeConversion.js';
import { addLike, removeLike } from 'app/api';

export default function Post({ content, thread = false, forReply = false }) {
    const [isModalOpen, setModal] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const users = useSelector(state => state.users);
    const stats = useSelector(state => state.stats);
    const currentUser = useSelector(state => state.currentUser);
    const dispatch = useDispatch();

    function openCommentModal(index) {
        setModal(value => !value);
    }

    function handleLike(state) {
        if (!isLoading) {
            setLoading(true);
            if (state !== undefined) {
                dispatch(removeLike(content.id, currentUser.id));
                delete stats[content.id].likes[currentUser.id];
                stats[content.id].likeCount = stats[content.id]?.likeCount - 1;
            } else {
                dispatch(addLike(content.id, currentUser.id));
                if (stats[content.id].likes === undefined) {
                    stats[content.id].likes = {};
                    stats[content.id].likes[currentUser.id] = {
                        date: new Date().toLocaleString()
                    }
                } else {
                    stats[content.id].likes[currentUser.id] = {
                        date: new Date().toLocaleString()
                    }
                }
                stats[content.id].likeCount = stats[content.id]?.likeCount + 1;
            }
        }
        setTimeout(() => {
            setLoading(false);
        }, 0)
    }

    useEffect(() => {
        return () => {
            console.log('Post unmounted')
        }
    }, [stats])

    return (
        <div className={"post-wrapper" + (thread || forReply ? ' hide-border' : '')}>
            <div>
                <Link to={users[content.userId].username}>
                    <LazyLoadImage
                        alt="user-avatar"
                        className="avatar"
                        src={users[content.userId].profile_image}
                    />
                </Link>
                {thread && <div className="thread"></div>}
            </div>
            <div>
                <span className="post-row">
                    <span className="name">
                        <Link to={users[content.userId].username}>
                            {users[content.userId].name}</Link>
                    </span>
                    <span className="username">
                        <Link to={users[content.userId].username}>
                            @{users[content.userId].username}</Link>
                    </span>
                    <span className="time">· {calculateTime(content.date)}</span>
                    <SVG alt="profile-expand-icon" src={Down} />
                </span>
                <pre className="post-content">
                    {content.content}
                </pre>
                {
                    forReply && <p className="reply-username"><span className="username">Replying to </span>
                        <Link to={users[content.userId].username}>@{users[content.userId].username}</Link>
                    </p>
                }
                {!forReply && <span className="post-action">
                    <span className="actions">
                        <SVG alt="comment-icon" src={AddComment} onClick={() => openCommentModal(content)} />
                        {stats[content.id]?.commentsCount > 0 && <span className="value">{stats[content.id]?.commentsCount}</span>}
                    </span>
                    <span className="actions">
                        <SVG alt="retweet-icon" src={Retweet} />
                    </span>
                    <span className="actions">
                        <SVG alt="like-icon" src={(stats[content.id]?.likes || {})[currentUser.id] !== undefined ? Liked : AddLike} onClick={() => handleLike((stats[content.id]?.likes || {})[currentUser.id])} />
                        {!isLoading && stats[content.id]?.likeCount > 0 && <span className="value">{stats[content.id]?.likeCount}</span>}
                    </span>
                    <span className="actions">
                        <SVG alt="share-icon" src={Share} />
                    </span>
                    <span className="actions not-mobile-visible">
                        <SVG alt="analytics-icon" src={Analytics} />
                    </span>
                </span>
                }
            </div>
            {isModalOpen && (
                <Modal>
                    <div className="modal-container">
                        <div className="modal-view">
                            <div className="modal-header" onClick={() => setModal((value => !value))}>×</div>
                            <div className="modal-body">
                                <Create content={content} id={content.id} rows={7} />
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    )
}