import { CURRENT_USER, FOLLOWING, GET_HEADER, GET_STATS, GET_TIMELINE_TWEETS, GET_USER, GET_USERS, GET_USER_TWEETS } from './types';

export function setHeader(data) {
    return {
        type: GET_HEADER,
        header: data
    }
}

export function setCurrentUser(data) {
    return {
        type: CURRENT_USER,
        user: data
    }
}

export function setTimelineTweets(data) {
    return {
        type: GET_TIMELINE_TWEETS,
        tweets: data
    }
}

export function setAllUsers(data) {
    return {
        type: GET_USERS,
        users: data
    }
}

export function setStats(id, data) {
    return {
        type: GET_STATS,
        id,
        data
    }
}

export function setProfile(data) {
    return {
        type: GET_USER,
        user: data
    }
}

export function setUserTweets(data) {
    return {
        type: GET_USER_TWEETS,
        tweets: data
    }
}

export function setFollowing(id, data) {
    return {
        type: FOLLOWING,
        id,
        data
    }
}

export function setFollowers(id, data) {
    return {
        type: FOLLOWERS,
        id,
        data
    }
}

