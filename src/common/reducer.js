import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import todo from '../todo/todoReducer'
import account from '../account/accountReducer'

export default combineReducers({
  routing: routerReducer,
  todo,
  account,
})