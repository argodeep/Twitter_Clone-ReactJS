const statCache = {};

export function timelineTweets(state = [], action) {
  switch (action.type) {
    case 'GET_TIMELINE_TWEETS':
      return action.tweets
    default:
      return state
  }
}

export function stats(state = {}, action) {
  switch (action.type) {
    case 'GET_STATS':
      statCache[action.id] = action.data;
      return statCache
    default:
      return state
  }
}

export function userTweets(state = [], action) {
  switch (action.type) {
    case 'GET_USER_TWEETS':
      return action.tweets
    default:
      return state
  }
}