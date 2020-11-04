import React from 'react';
import {useDispatch} from 'react-redux';
import {push} from 'connected-react-router';

const Login = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=> dispatch(push('/'))}>
                ログインする
            </button>
        </div>
    )
};

export default Login;