import React, { useContext, useState, useEffect, memo } from 'react';
import Answer from '../answer';
import QuizContext from '../../../context/QuizContext';
import { QUIZ } from '../../../core/constants/actionTypes';

const Answers = ({answerList = []}) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const { state, dispatch } = useContext(QuizContext);
    const { answers, currentQuestion, currentAnswers } = state;

    useEffect(() => {
        setSelectedAnswer(getSelectedAnswer())
    }, [currentQuestion]);

    const getSelectedAnswer = () => {
        if(answers[currentQuestion] ) {
         return answers[currentQuestion].answer 
        }
    }
    
    useEffect(() => {
        if(selectedAnswer) {
            dispatch({type: QUIZ.SET_CURRENT_ANSWER, payload: selectedAnswer})
        }
    }, [selectedAnswer]);

    return (
        <div className='answer-content'>
            {
                answerList.map((item, index) => {
                    return (
                        <Answer 
                            label={index + 1}
                            letter={index.toString()} 
                            answer={item} 
                            selected={currentAnswers === index.toString()}
                            dispatch={dispatch}
                            onSetSelectedAnswer={setSelectedAnswer}
                        />
                    )
                })
            }
        </div>
    )
};
export default memo(Answers);