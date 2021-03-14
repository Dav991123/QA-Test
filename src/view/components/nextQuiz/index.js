import React, { useContext, memo } from 'react';
import QuizContext from '../../../context/QuizContext';
import { QUIZ } from '../../../core/constants/actionTypes';
import { useAlert } from 'react-alert';

const NextQuiz = () => {
    const { state, dispatch } = useContext(QuizContext);
    const alert = useAlert()
    const { answers, currentQuestion, currentAnswers, exactQuestion, questions } = state;
    const questionData = questions[currentQuestion];
    const selectedAnswer = answers[currentQuestion] || {}
    
    const nextQuestion = () => {
        if(!currentAnswers) {
            alert.error("Place select an option");
            return;
        }

        if(questionData.correct_answer.includes(+currentAnswers)) {
            dispatch({
                type: QUIZ.SET_EXACT_QUESTION,
                payload: exactQuestion + 1
            })
        }
       
        dispatch({
            type: QUIZ.SET_ANSWERS,
            payload: [
                ...answers,
                {
                    questionId: questionData.id,
                    answer: currentAnswers,
                    selectedOption: currentAnswers
                }
            ]
        })
   
        dispatch({type: QUIZ.SET_CURRENT_ANSWER, payload: ''})
        
        if(currentQuestion + 1 < questions.length) {
            dispatch({
                type: QUIZ.SET_CURRENT_QUESTION,
                payload: currentQuestion + 1
            })
            return;
        }
        dispatch({type: QUIZ.SET_SHOW_RESULTS, payload: true})
    }; 


    return (
        <div>
            <button
                 className={'btn btn-primary'}
                 onClick={nextQuestion}
            >
                Next Quiz
            </button>
        </div>
    )
};
export default memo(NextQuiz);