import * as Actions from './actions'; //actionsファイル内のモジュールを全てimport(Actionsという名前をつける)
import initialState from '../store/initialState';

export const UsersReducer = (state = initialState.users, action) => { //第一引数：state　第二引数：actionがreturnした値
    switch (action.type) {
        case Actions.SIGN_IN: //Actionのtypeに応じてstateをどう変更するのか決める
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

//Store内のstateの管理人
//Actionからデータを受け取りStoreのsteteをどう変更するのかを決める


//スプレッド構文
//配列やオブジェクトの要素を展開する
// const payload = {
//     uid: "00000",
//     username: "saikai"
// }
// console.log({...payload})
// //{uid: "00000", username: "saikai"}

// //Merge Object
// const state = { isSignedId: false }
// console.log({...state, ...payload})