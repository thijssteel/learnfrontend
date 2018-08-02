import { spawn } from 'redux-saga/effects'

import accountSaga from '../account/accountSaga'
import todoSaga from '../todo/todoSaga'

export default function * rootSaga () {
  yield [
    spawn(accountSaga),
    spawn(todoSaga),
  ]
}