import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import createHistory from "history/createBrowserHistory"
import { routerMiddleware } from 'react-router-redux'

import reducer from './reducer'
import rootSaga from './saga'

const DEVELOPMENT = process.env.NODE_ENV === 'development'

let store

export const history = createHistory();

export default function getStore () {
  if (store) {
    return store
  }

  const sagaMiddleware = createSagaMiddleware()
  const routerMiddlew = routerMiddleware(history);


  let enhancer = DEVELOPMENT && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

  store = createStore(
    reducer,
    enhancer(applyMiddleware(sagaMiddleware), applyMiddleware(routerMiddlew)),
  )

  sagaMiddleware.run(rootSaga)

  return store
}