import React, { useState } from 'react';
import Input from '../../../components/input';
import { useForm } from '../../../../Hook/useForm';
import { passwordValidation, emailValidation } from '../../../../core/constants/validation';
import Loading from '../../../components/loading';
import { useAlert } from 'react-alert';
import { base } from '../../../../base';

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
    },
    userName: {
        requiredMessage: 'user name is required*',
    },
}

const Register = () => {
    const alert = useAlert()
    const [loading, setLoading] = useState(false);
    const { values, errors, onFocus, isEnable, handleChange, handleOutsideClick } = useForm(
        {
          email: '',
          password: '',
          userName: '',
        },
        validateModal
    );

    const handleRegister = e => {
        setLoading(true);
        e.preventDefault();
        const { userName, email, password } = values;
        base.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            setLoading(false);
            base.database().ref('users').push({
                displayName: userName,
                userId: base.auth().currentUser.uid,
                email: base.auth().currentUser.email
            })

            
        })
        .catch(error => {
            alert.error(error.message);
            setLoading(false);
        })
   
    }
    return (
        <div className={'input-content'}>
            <form onSubmit={handleRegister}>
                <div>
                    <Input 
                        type={'text'}
                        name={'userName'}
                        label={'User Name'}
                        value={values.userName}
                        onChange={handleChange}
                        onBlur={handleOutsideClick}
                        onFocus={onFocus}
                        helperText={errors.userName}
                        error={errors.userName}
                    />
                </div>

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
                        <button disabled={isEnable} onClick={handleRegister}>
                            Register
                        </button>
                    </div>
                    )
                }
            </form>
        </div>
    )
};
export default Register;