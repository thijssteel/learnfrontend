import { call, takeEvery } from 'redux-saga/effects'
import { apiGet, apiPost } from '../common/http/api'
import * as actions from './todoActions'

function * listSaga (action) {
  yield call(apiGet, action, actions.TODO_FETCH_LIST_RESULT, 'api/todos')
}

function * addSaga (action) {
  yield call(apiPost, action, actions.TODO_ADD_RESULT, 'api/todos/add', action.payload)
}

function * removeSaga (action) {
  yield call(apiPost, action, actions.TODO_REMOVE_RESULT, 'api/todos/delete', action.payload)
}

export default function * todoSaga () {
  yield takeEvery(actions.TODO_FETCH_LIST, listSaga)
  yield takeEvery(actions.TODO_ADD, addSaga)
  yield takeEvery(actions.TODO_REMOVE, removeSaga)
}