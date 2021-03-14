import React, { useContext, memo } from 'react';
import QuizContext from '../../../context/QuizContext';
import { base } from '../../../base';
import { QUIZ } from '../../../core/constants/actionTypes';
import './index.css';
const Logout = () => {
    const { state, dispatch } = useContext(QuizContext);

    const handleLogout = () => {
        dispatch({type: QUIZ.SET_IS_AUTH, payload: false})
        base.auth().signOut()
    };
    return (
        <div className={'logout-button-content'}>
            <div class="navigation">
                 <span class="button" onClick={handleLogout}>
                 <div className={'logout-content'}> 
                    <i class="fas fa-sign-out-alt"></i>
                    <p class="logout">LOGOUT</p>
                 </div>
                </span>    
            </div>
        </div>
    )
}
export default memo(Logout);