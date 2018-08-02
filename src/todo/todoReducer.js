// @flow
import { 
  TODO_FETCH_LIST,
  TODO_FETCH_LIST_RESULT,
  TODO_ADD,
  TODO_ADD_RESULT,
  TODO_REMOVE,
  TODO_REMOVE_RESULT
} from './todoActions'

const initialState = {
  todos: [],
  loading: false,
}

export default function todoReducer (state= initialState, action) {
  switch (action.type) {
    case TODO_FETCH_LIST:
    case TODO_ADD:
    case TODO_REMOVE:
      return {
        ...state,
        loading: true
      }
    case TODO_FETCH_LIST_RESULT:
      if(action.error){
        return {
          ...state,
          error: action.payload,
          todos: [],
          loading: false
        }
      } else {
        return {
          ...state,
          error: null,
          loading: false,
          todos: action.payload,
        }
      }
    case TODO_ADD_RESULT:
      if(action.error){
        return {
          ...state,
          error: action.payload,
          loading: false
        }
      } else {
        return {
          ...state,
          error: null,
          loading: false,
          todos: [...state.todos, action.payload],
        }
      }
      case TODO_REMOVE_RESULT:
        if(action.error){
          return {
            ...state,
            error: action.payload,
            loading: false
          }
        } else {
          return {
            ...state,
            error: null,
            loading: false,
            todos: state.todos.filter(todo => todo.id !== action.payload.id),
          }
        }
    default:
      return state
  }
}