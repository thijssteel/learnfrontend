import { put, select } from 'redux-saga/effects'
import { createFetchSucces, createFetchError, createAction } from '../actions'
import axios from 'axios'

axios.defaults.baseURL = 'https://learnbackend.tsteel.be';
axios.defaults.validateStatus = (status) => {
  return status >= 200 && status < 300;
};
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'

export function * apiSaga (method, action, resultActionType, networkRoute, body = {}, headers = {}) {
  const accessToken = yield select(state => state.account.token)
  if (accessToken && accessToken !== '') {
    headers['Authorization'] = accessToken
  }
  try {
    const response = yield axios({
      method:method,
      url: networkRoute,
      headers: headers,
      data: body,
    })
    yield put(createFetchSucces(resultActionType, response.data, action))
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx

      if(error.response.status === 401){
        //this means the token was not valid

        //put logic to log out here
      }

      if(error.response.data.message){
        console.error(error.response.data.message)
      }

      if(error.response.data.errors){
        yield put(createFetchError(resultActionType, error.response.data.errors ))
      } else {
        yield put(createFetchError(resultActionType, {} ))
      }

    } else if (error.request) {
      // The request was made but no response was received
      yield put(createFetchError(resultActionType, {internal: 'no response'}))
    } else {
      // Something happened in setting up the request that triggered an Error
      yield put(createFetchError(resultActionType, JSON.stringify(error.message)))
    }
  }
}

export function * apiGet (action, resultActionType, networkRoute) {
  yield apiSaga ('get', action, resultActionType, networkRoute)
}

export function * apiPost (action, resultActionType, networkRoute, body = {}) {
  yield apiSaga ('post', action, resultActionType, networkRoute, body)
}