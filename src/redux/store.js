import { createStore, applyMiddleware, combineReducers } from 'redux';
import hackerNewsReducer from './hackerNewsReducer';
import mediumReducer from './mediumReducer';
import redditReducer from './redditReducer';
import promiseMiddleware from 'redux-promise-middleware';

const rootReducer = combineReducers({
    hackerNews: hackerNewsReducer,
    medium: mediumReducer,
    reddit: redditReducer,
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));