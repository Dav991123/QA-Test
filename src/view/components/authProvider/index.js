import React, { useEffect, useState, useContext } from "react";
import QuizContext from '../../../context/QuizContext';
import { QUIZ } from '../../../core/constants/actionTypes';
import { base } from '../../../base';

const AuthProvider = ({value, children, onSetIsLogin}) => {
    console.log(value.state.isAuth)
    const [ loading, setLoading ] = useState(false);
    const authListener = () => {
        setLoading(true)
        base.auth().onAuthStateChanged(user => {
            if(user) {
                console.log(user, 'user')
                setLoading(false)
                onSetIsLogin({
                    actionType: QUIZ.SET_IS_AUTH,
                    payload: true
                })
            }else {
                setLoading(false);
                onSetIsLogin({
                    type: QUIZ.SET_IS_AUTH,
                    payload: false
                })
            }
        })
    }
    useEffect(() => {
        authListener()
    }, [])

    if(loading) {
        return (
            <div>Loading ..</div>
        )
    }
    return (
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    )
};
export default AuthProvider;