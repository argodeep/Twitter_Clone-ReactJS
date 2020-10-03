export function header(state = {title: 'Home', subTtitle: ''}, action) {
    switch(action.type) {
        case 'GET_HEADER': 
          return action.header
        default: 
          return state
    }
}