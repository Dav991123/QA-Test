import React, { useContext, memo } from 'react';
import QuizContext from '../../../context/QuizContext';
import LocalStorageHelper from '../../../core/helpers/localStorageHelper';
import { QUIZ } from '../../../core/constants/actionTypes';
import { JavaScriptQuestions } from '../../../questions-data/javaScriptQuestions';
import './index.css';

const GoBackQuiz = () =>     {
    const { state, dispatch } = useContext(QuizContext);
    const { currentQuestion, currentAnswers, exactQuestion, answers } = state;
    const questionData = JavaScriptQuestions[LocalStorageHelper.getItem('currentQuestion')];
    const handleGoBackQuiz = () => {

        if(currentAnswers === questionData.correct_answer) {
            dispatch({
                type: QUIZ.SET_EXACT_QUESTION,
                payload: exactQuestion + 1
            })
        }

        dispatch({
            type: QUIZ.SET_CURRENT_QUESTION,
            payload: currentQuestion - 1
        })
    }

    return (
        <div>
        {/* <button
            className={'btn-go-back-quiz'}
            onClick={handleGoBackQuiz}
            disabled={!answers.length || !currentQuestion || currentAnswers}
        >
          <i class="fas fa-undo-alt"></i>
        </button> */}
    </div>
    )
};
export default memo(GoBackQuiz);
