import { combineReducers } from 'redux'
// import count from './changeCount'
// import users from './users'
// import auth from './changeAuth'
import * as reducers from './reducers'

export default combineReducers({
  ...reducers
})