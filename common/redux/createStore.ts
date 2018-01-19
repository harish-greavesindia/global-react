import { createStore, applyMiddleware, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux'
const reduxArray = require('redux-array');

import { history } from '../vendor/history';

export default (rootReducer:  Reducer<any>, INIT_STATE: any) => {
    let enhancer = (process.env.NODE_ENV == 'development')
        ? composeWithDevTools(applyMiddleware( reduxArray, routerMiddleware(history)))
        : applyMiddleware(reduxArray, routerMiddleware(history));

    return createStore(rootReducer, INIT_STATE, enhancer);
};