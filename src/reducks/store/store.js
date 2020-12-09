import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

//Import reducers
import {ProductsReducer} from '../products/reducers';
import {UsersReducer} from '../users/reducers';

export default function createStore(history) {

    const middleWares = [routerMiddleware(history),thunk];

    //開発環境のみ
    if (process.env.NODE_ENV === 'development') {
        const logger = createLogger({
            collapsed: true,
            diff: true
        });
        middleWares.push(logger)
    }
    

    return reduxCreateStore(
        combineReducers({
            Products: ProductsReducer,
            router: connectRouter(history),
            products: ProductsReducer,
            users: UsersReducer,
        }),
        applyMiddleware(...middleWares)
    )
}