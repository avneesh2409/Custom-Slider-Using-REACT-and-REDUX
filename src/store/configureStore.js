import {userReducer} from './reducer'
import { applyMiddleware, createStore,combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'

const rootReducer = combineReducers({
    imageState:userReducer
})
export default function configureStore(preloadedState) {
  const middle_wares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middle_wares)
  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)
  const store = createStore(rootReducer, preloadedState, composedEnhancers)
  return store
}
