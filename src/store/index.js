import { createStore } from 'redux'
import rootReducers from './reducers/index'
import initialState from './initialState'

export default () => {
  return  createStore(rootReducers, initialState)
}