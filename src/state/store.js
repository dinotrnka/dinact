import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';

import LoginReducer from './login/reducers';

export default function configureStore() {
  const initialState = {};
  const middleware = applyMiddleware(ReduxThunk);
  const rootReducer = combineReducers({
    login: LoginReducer,
  });

  return createStore(rootReducer, initialState, middleware);
}
