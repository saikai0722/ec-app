import * as Actions from './actions'; //actionsファイル内のモジュールを全てimport(Actionsという名前をつける)
import initialState from '../store/initialState';

export const ProductsReducer = (state = initialState.products, action) => { //第一引数：state　第二引数：actionがreturnした値
    switch (action.type) {
        default:
            return state
    }
}