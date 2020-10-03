const followingCache = {};
const followersCache = {};

export function users(state = null, action) {
  switch (action.type) {
    case 'GET_USERS':
      return action.users
    default:
      return state
  }
}

export function profile(state = null, action) {
  switch (action.type) {
    case 'GET_USER':
      return action.user
    default:
      return state
  }
}

export function following(state = null, action) {
  switch (action.type) {
    case 'FOLLOWING':
      followingCache[action.id] = action.data;
      return followingCache
    default:
      return state
  }
}

export function followers(state = null, action) {
  switch (action.type) {
    case 'FOLLOWER':
      followersCache[action.id] = action.data;
      return followersCache
    default:
      return state
  }
}