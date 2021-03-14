import React from 'react';
import './index.css';
const Input = ({type, name, label, onChange, value, onBlur, onFocus, helperText, error}) => {
    return (
        <div className="group">      
            <input 
                type={type} 
                name={name}
                required 
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                style={
                    error ? {borderColor: '#f44336'} : {borderColor: '#757575'}
                }
            /> 
            <p className={'error-text'}>{helperText}</p>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label style={
                error ? {color: '#f44336'} : {color: '#999'}
            }>
                {label}
            </label>
        </div>
    )
};
export default Input;