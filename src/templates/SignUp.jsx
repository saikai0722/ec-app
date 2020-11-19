import React, {useState} from 'react';
import {TextInput} from '../components/Uikit';

const SignUp = () => {

    const [username, setUsername] = useState(""),
    const [email, setEmail] = useState(""),
    const [password, setPassword] = useState(""),
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className="c-section-container">
            <h2 className="u-text__headline u-text-center">アカウント登録</h2>
            <div className=".module-spacer--medium " />

            <TextInput 
                fullWidth={} lable={} multiline={} required={}
                rows={} value={} type={} onChange={}
            />

        </div>
    )
}

export default SignUp;