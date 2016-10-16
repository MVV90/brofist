import { NAV_PUSH, NAV_POP, NAV_RESET, SIGN_OUT } from '../constants/ActionTypes'
// import { routeByKey } from '../routes'
// import * as NavigationStateUtils from 'NavigationStateUtils'

const initialNavState = {
  index: 0,
  routes: "hello"
}; // routes: [ routeByKey('welcome') ]

function navigationState(state = initialNavState, action) {
/*
  switch (action.type) {
  case SIGN_OUT:
    return initialNavState
  case NAV_PUSH:
    return NavigationStateUtils.push(state, action.payload)

  case NAV_POP:
    if (state.index === 0 || state.routes.length === 1) {
      return state
    }
    return NavigationStateUtils.pop(state)

  case NAV_RESET:
    var route = action.payload
    if (route) {
      return { index: 0, routes: [route] }
    }
    return NavigationStateUtils.reset(state, [])

  default:
    return state
  }
*/

  return state + 1;
}

export default navigationState
