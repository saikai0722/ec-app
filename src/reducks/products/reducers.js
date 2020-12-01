import * as Actions from './actions';
import initialState from '../store/initialState';

export const ProductsReducer = (state = initialState.products, action) => { //第一引数：state　第二引数：actionがreturnした値
    switch (action.type) {
        case Actions.DELETE_PRODUCT:
            return {
                ...state,
                list: [...action.payload]
            };
        case Actions.FETCH_PRODUCTS:
            return {
                ...state,
                list: [...action.payload]
            };
        default:
            return state
    }
}