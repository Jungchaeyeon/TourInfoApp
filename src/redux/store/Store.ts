import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import apiReducer from '../reducer/ApiReducer';

const appReducers = combineReducers({
  apiReducer,
});

const rootReducer = (state: any, action: any) => appReducers(state, action);

const logger = createLogger();
export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
