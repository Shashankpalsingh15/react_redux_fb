import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './RootReducer';

// Note: this API requires redux@>=3.1.0
const store = createStore(
  rootReducer, composeWithDevTools
  (applyMiddleware(thunk, logger)
));

export default store;