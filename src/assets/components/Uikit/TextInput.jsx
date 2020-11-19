import React from 'react';
import TextField from '@material-ui/core';

const TextInput = () => {
    return (
        <TextField 
        fullWidth = {props.fullWidth}
        lable = {props.lable}
        margin = "dense"
        multiline = {props.multiline}
        required = {props.required}
        rows = {props.rows}
        value = {props.value}
        type = {props.type}
        onChenge = {props.onChenge}
        />
    )
}

export default TextInput;