import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from 'app/components/common/loading';
import Post from 'app/components/common/post';
import Create from 'app/components/common/create-post';
import { setHeader } from 'app/redux/actions';
import { getTweets, getUsers } from 'app/api';

export default function ContentArea({ children }) {
    const [isLoading, setLoading] = useState(true);
    const [errorText, setErrorText] = useState('');
    const tweets = useSelector(state => state.timelineTweets);
    const dispatch = useDispatch();

    async function initHome() {
        document.title = 'Home / Twitter';
        dispatch(getUsers());
        dispatch(setHeader({
            title: 'Home',
            subTitle: ''
        }));
        const response = await dispatch(getTweets());
        if (typeof response === 'string' && response === 'NO_TWEETS_FOUND') {
            setErrorText('Error occured! Reload the page');
        }
        if (typeof response === 'object') {
            if (response.tweets.length > 0) {
                setLoading(false);
            } else {
                setErrorText('No Tweets Found! Reload the page');
            }
        }
    }

    function isThread(id) {
        return [...tweets].findIndex(tweet => tweet.forPost === id) !== -1
    }

    useEffect(() => {
        initHome();
        return () => {
            console.log('Home unmounted')
        }
    }, [])

    return (
        <React.Fragment>
            <Create />
            {
                isLoading && (
                    <div className="loading-home">
                        <Loading errorText={errorText} type="spinner" />
                    </div>
                )
            }
            {
                !isLoading && tweets.map((tweet, index) =>
                    <Post content={tweet} thread={isThread(tweet.id)} key={'t-' + index + tweet.id} />
                )
            }
        </React.Fragment>
    )
}