export function createFetchRequest (type, payload) {
  return {
    type,
    payload,
  }
}

export function createFetchSucces (type, payload, fetchAction) {
  return {
    type,
    payload,
    fetchAction,
    error: false,
  }
}

export function createFetchError (type, payload) {
  return {
    type,
    payload,
    error: true,
  }
}

export function createAction (type, payload) {
  return {
    type,
    payload,
  }
}