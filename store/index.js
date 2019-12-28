import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import testReducer from './test/testReducer'
import leftReducer from './left/leftReducer'
import rightReducer from './right/rightReducer'

function configStore() {
  const store = createStore(
    combineReducers({
      test: testReducer,
      left: leftReducer,
      right: rightReducer
    }),
    applyMiddleware(logger, thunk)
  )
  return store
}

export default configStore
