import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import message from './Message/messages';

const rootReducer = combineReducers({
  message_text: message,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));

export default store;
