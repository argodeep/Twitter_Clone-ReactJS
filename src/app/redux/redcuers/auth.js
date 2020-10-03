export function currentUser(state = null, action) {
    switch(action.type) {
        case 'CURRENT_USER': 
          return action.user
        default: 
          return state
    }
}