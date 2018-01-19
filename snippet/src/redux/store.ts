import { createStore, applyMiddleware, Store} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';

// import * as reduxArray from 'redux-array';
//
import rootReducer from './reducers';
import { history } from '../../../common/vendor/history';


export interface SnippetAppStore {
    router?: any
}


let enhancer = (process.env.NODE_ENV == 'development')
    ? composeWithDevTools(applyMiddleware( routerMiddleware(history)))
    : applyMiddleware(routerMiddleware(history));

/**
 * Default APP State
 */
export const SNIPPET_DEAFULT_STATE: SnippetAppStore = {
};


export const store: Store<any> = createStore(rootReducer, SNIPPET_DEAFULT_STATE, enhancer);
