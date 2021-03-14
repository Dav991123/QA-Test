import React, { useContext, useState, useEffect } from 'react';
import Input from '../../../components/input';
import QuizContext from '../../../../context/QuizContext';
import { QUIZ } from '../../../../core/constants/actionTypes';
import { useForm } from '../../../../Hook/useForm';
import { passwordValidation, emailValidation } from '../../../../core/constants/validation';

import { base } from '../../../../base';
import { useAlert } from 'react-alert';
import CoursesList from '../../../components/courses-list';
import LocalStorageHelper from '../../../../core/helpers/localStorageHelper';
import Loading from '../../../components/loading';
import './index.css';

const validateModal = {
    email: {
        requiredMessage: 'Email is required*',
        regExp: emailValidation.regExp,
        warningMessage: emailValidation.text
    },

    password: {
      requiredMessage: 'Password is required*',
      regExp: passwordValidation.regExp,
      warningMessage: passwordValidation.text
    }
}

const Login = () => {
    const [ level, setLevel ] = useState([]);
    const [loading, setLoading] = useState(false);
    const alert = useAlert()
    const { dispatch } = useContext(QuizContext);
    const { values, errors, onFocus, isEnable, handleChange, handleOutsideClick } = useForm(
        {
          email: '',
          password: ''
        },
        validateModal
    );


    const handleLogin = e => {
        e.preventDefault();
        setLoading(true);
        const { email, password } = values;
        base.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            setLoading(false);
            dispatch({
                type: QUIZ.SET_IS_AUTH,
                payload: true
            })
        })
        .catch(error => {
            setLoading(false);
            dispatch({
                type: QUIZ.SET_IS_AUTH,
                payload: false
            })
            alert.error(error.message);
        })
    }
    return (
        <div className={'input-content'}>
        <form onSubmit={handleLogin}>
            <div>
                <Input 
                    type={'text'}
                    name={'email'}
                    label={'Email'}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleOutsideClick}
                    onFocus={onFocus}
                    helperText={errors.email}
                    error={errors.email}
                />
            </div>

            <div>
                <Input 
                    type={'password'}
                    name={'password'}
                    label={'Password'}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleOutsideClick}
                    onFocus={onFocus}
                    helperText={errors.password}
                    error={errors.password}
                />
            </div>
                {
                    loading ? (
                        <Loading />
                    ): (
                    <div className={'button-content'}> 
                        <button disabled={isEnable} onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                    )
                }
            </form>
        </div>

    )
};
export default Login;