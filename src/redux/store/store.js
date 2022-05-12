import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import signUpReducer from '../reducers/signUpReducer';

const reducer = combineReducers({
  signUpReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
