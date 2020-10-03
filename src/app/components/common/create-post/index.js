import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { updatePost } from 'app/api';
import Post from '../post';
import './style.scss';
// import SVG from 'react-inlinesvg';
// import Emoji from 'assets/img/emoji.svg';


export default function Create({ content, id = null, rows = 2, isPosted }) {
    const [postContent, setContent] = useState('');
    const [isSubmitting, setLoading] = useState(false);
    const [errorText, setErrorText] = useState('');
    const currentUser = useSelector(state => state.currentUser);


    const dispatch = useDispatch();

    async function handleSubmitTweet() {
        setLoading(true);
        let response
        if (postContent.length > 0 && errorText.length === 0) {
            setErrorText('');
            response = await dispatch(updatePost(id, currentUser.id, postContent));
            if (typeof response === 'string' && response === 'TWEET_HAS_BEEN_POSTED' && !id) {
                setLoading(false);
                setContent('');
                isPosted(true)
            }
        }
    }

    useEffect(() => {
        return (() => {
            console.log('Create Post Unmounted')
        })
    }, [])

    return (
        <Fragment>
            { id && (
                <div>
                    <Post content={content} thread={true} forReply={true} />
                    <p></p>
                </div>
            )}
            <div className="create-post-wrapper">
                <Link to={currentUser.username}>
                    <LazyLoadImage
                        alt="user-avatar" className="avatar" src={currentUser.profile_image}
                    />
                </Link>
                <div>
                    <textarea rows={rows} value={postContent} onChange={(event) => {
                        setContent(event.target.value)
                        if (event.target.value.length > 140) {
                            setErrorText('Post a tweet within 140 characters limit')
                        } else {
                            setErrorText('')
                        }
                    }} placeholder={id ? 'Tweet your reply' : "What's Happening?"}></textarea>
                    <span className="post-action">
                        <span>
                            {/* <SVG alt="emoji-icon" src={Emoji} /> */}
                            {errorText && <span className="error-message">{errorText}</span>}
                            {!errorText && postContent.length > 0 && <span className="info-message">{140 - postContent.length} left</span>}
                        </span>
                        <button className="add-tweet" disabled={errorText || isSubmitting || postContent.length === 0 ? true : false} onClick={() => handleSubmitTweet()}>
                            {isSubmitting ? 'Sending Tweet' : 'Tweet'}
                        </button>
                    </span>
                </div>
            </div>
        </Fragment>
    )
}