import { setCurrentUser, setTimelineTweets, setAllUsers, setStats, setProfile, setHeader, setUserTweets, setFollowers, setFollowing } from '../redux/actions';

export function loginWihCredentials(loginObj) {
    return (dispatch) => {
        // check if user exists or not [Fake Backend]
        const users = Object.values(JSON.parse(localStorage.getItem('users')));
        const currentUser = users.find(user => atob(user.password) === loginObj.password && (user.email === loginObj.identifier || user.username === loginObj.identifier || user.phone === loginObj.identifier))
        if (currentUser !== undefined) {
            localStorage.setItem('user', JSON.stringify(currentUser));
            const reduxActionCall = () => dispatch(setCurrentUser(currentUser));
            return delayFn(currentUser, reduxActionCall)
        }
        return delayFn('USER_NOT_FOUND')
    }
}

export function getTweets() {
    return (dispatch) => {
        const listTweets = JSON.parse(localStorage.getItem('tweets')) || [];
        if (listTweets && listTweets.length > 0) {
            listTweets.forEach(tweet => {
                dispatch(getPostStats(tweet.id));
            });
            const reduxActionCall = () => dispatch(setTimelineTweets(listTweets));
            return delayFn(listTweets, reduxActionCall)
        }
        return delayFn('NO_TWEETS_FOUND')
    }
}

export function getUsers() {
    return (dispatch) => {
        const listUsers = JSON.parse(localStorage.getItem('users')) || null;
        if (listUsers) {
            const reduxActionCall = () => dispatch(setAllUsers(listUsers));
            return delayFn(listUsers, reduxActionCall)
        }
        return delayFn('NO_USERS_FOUND')
    }
}

export function getPostStats(id) {
    return (dispatch) => {
        const likes = JSON.parse(localStorage.getItem('likes'))[id] || {};
        const likeCount = (Object.keys(likes || {}) || []).length || 0;
        const comments = JSON.parse(localStorage.getItem('tweets')).filter(tweet => tweet.forPost === id);
        const commentsCount = JSON.parse(localStorage.getItem('tweets')).filter(tweet => tweet.forPost === id).length || 0;
        const reduxActionCall = () => dispatch(setStats(id, { likes, likeCount, comments, commentsCount }));
        return delayFn({ likes, likeCount, comments, commentsCount }, reduxActionCall)
    }
}

export function addLike(postId, userId) {
    return (dispatch) => {
        const allLikes = JSON.parse(localStorage.getItem('likes'));
        if (allLikes[postId] !== undefined) {
            allLikes[postId][userId] = {
                date: new Date().toLocaleString()
            }
        } else {
            allLikes[postId] = {};
            allLikes[postId][userId] = {
                date: new Date().toLocaleString()
            }
        }
        localStorage.setItem('likes', JSON.stringify(allLikes));
        dispatch(getPostStats(postId));
    }
}

export function removeLike(postId, userId) {
    return (dispatch) => {
        const allLikes = JSON.parse(localStorage.getItem('likes'));
        delete allLikes[postId][userId];
        localStorage.setItem('likes', JSON.stringify(allLikes));
        dispatch(getPostStats(postId));
    }
}

export function updatePost(postId, userId, content) {
    return (dispatch) => {
        const body = {
            id: new Date().getTime() + Math.random() * 10000,
            forPost: postId || null,
            content: content,
            userId: userId,
            date: new Date().toLocaleString()
        }
        let tweets = JSON.parse(localStorage.getItem('tweets'));
        if (postId) {
            const postIndex = tweets.findIndex(tweet => tweet.id === postId) + 1;
            tweets = [...tweets.slice(0, postIndex), body, ...tweets.slice(postIndex)];
        } else {
            tweets.unshift(body);
        }
        localStorage.setItem('tweets', JSON.stringify(tweets));
        const users = JSON.parse(localStorage.getItem('users'));
        users[userId].tweets = users[userId].tweets + 1;
        localStorage.setItem('users', JSON.stringify(users));
        dispatch(getTweets());
        dispatch(getPostStats(postId || body.id));
        return delayFn('TWEET_HAS_BEEN_POSTED', null)
    }
}

export function getUser(username) {
    return (dispatch) => {
        const users = Object.values(JSON.parse(localStorage.getItem('users')));
        const user = users.find(user => user.username === username);
        if (user !== undefined) {
            dispatch(setHeader({
                title: user.name,
                subTitle: user.tweets + ' Tweet' + (user.tweets > 1 ? 's' : '')
            }));
            dispatch(getUserTweets(user))
            const reduxActionCall = () => dispatch(setProfile(user));
            return delayFn(user, reduxActionCall)
        }
        return delayFn('USER_NOT_FOUND')
    }
}

export function checkFollowing(fromUserId) {
    return (dispatch) => {
        const following = JSON.parse(localStorage.getItem('following'));
        const reduxActionCall = () => dispatch(setFollowing(fromUserId, following[fromUserId]));
        return delayFn(following[fromUserId], reduxActionCall)
    }
}

// export function checkFollower(toUsername) {
//     return (dispatch) => {
//         const userId = Object.values(JSON.parse(localStorage.getItem('users'))).find(user => user.username === toUsername)?.id || null;
//         const following = JSON.parse(localStorage.getItem('following'));
//         const reduxActionCall = () => dispatch(setFollowers(userId, following[userId]));
//         return delayFn(following[userId], reduxActionCall)
//     }
// }

export function getUserTweets(user) {
    return (dispatch) => {
        if (user !== undefined) {
            const listTweets = (JSON.parse(localStorage.getItem('tweets')) || []).filter(tweet => tweet.userId === user.id);
            listTweets.forEach(tweet => {
                dispatch(getPostStats(tweet.id));
            });
            const reduxActionCall = () => dispatch(setUserTweets(listTweets));
            return delayFn(listTweets, reduxActionCall)
        }
        return delayFn('USER_TWEETS_NOT_FOUND')
    }
}

export function followUser(from, to) {
    return (dispatch) => {
        const following = JSON.parse(localStorage.getItem('following'));
        following[from] = {};
        following[from][to] = { date: new Date().toLocaleString() };
        localStorage.setItem('following', JSON.stringify(following));
        const users = JSON.parse(localStorage.getItem('users'));
        users[from].following = users[from].following + 1;
        localStorage.setItem('users', JSON.stringify(users));
        dispatch((checkFollowing(from)))
    }
}

export function unFollowUser(from, to) {
    return (dispatch) => {
        const following = JSON.parse(localStorage.getItem('following'));
        delete following[from][to];
        localStorage.setItem('following', JSON.stringify(following));
        const users = JSON.parse(localStorage.getItem('users'));
        users[from].following = users[from].following - 1;
        localStorage.setItem('users', JSON.stringify(users));
        dispatch((checkFollowing(from)))
    }
}



// delay function with Promise to simulate real-backend
async function delayFn(data, updateStore = null) {
    const response = await new Promise((resolutionFunc, rejectionFunc) => {
        setTimeout(() => {
            resolutionFunc(data);
        }, 2000);
    });
    return updateStore ? updateStore() : response
}