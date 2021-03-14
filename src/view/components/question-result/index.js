import React, { useContext, useState, useEffect } from 'react';
import { JavaScriptQuestions } from '../../../questions-data/javaScriptQuestions';
import QuizContext from '../../../context/QuizContext';
import CodeEditor from '../editor';
import SendResult from '../../components/send-result';
import { QUIZ } from '../../../core/constants/actionTypes';
import './index.css';

const QuestionResult = ({answers}) => {
    const [isSendMessage, setIsSendMessage] = useState(false);

    const { dispatch, state } = useContext(QuizContext);
    const [questionId, setQuestionId] = useState(null);
    const { exactQuestion, questions, timer } = state;
    const allQuestionsCount = questions.length;
    const percent =  Math.round(exactQuestion/allQuestionsCount * 100)
    
    const restart = () => {
        dispatch({type: QUIZ.RESET_QUIZ});
    };  

    const renderComment = (currentId, comment ) => {
        console.log('comment', comment);
        if(questionId === currentId ) {
            return (
                <div className="comment">
                    <p>
                        {comment}
                    </p>
                    <button 
                        className={`${setQuestionId ? 'active-close-icon': ''}
                            btn-question-info question-icon-close
                        `}
                        onClick={() => setQuestionId(null)}
                    >
                        <i className="fa fa-remove" ></i>
                    </button>
                </div>
            )
        };

        return null
    };

    const renderQuestionInfo = (currentId, selectedOption, question) => {
        const handleSetClassName = (index) => {
            let className;
            if(question.correct_answer.includes(index)) {
                className = 'true'
            }else if(+selectedOption === index) {
                className = 'false'
            }

            return className;
        };

        return (
            <div 
                className="question-info-content"
            >
           
            <div className={'question-info-desktop'}>
                <div>
                    {
                        question.questionData && question.questionData 
                        
                    }
                    <h2>{question.quizDescription}</h2>     
                </div>
            </div>
            </div>
        )
    };

    const renderResultsData = () => {
        return answers.map(answer => {
            const question = questions.find(question => question.id === answer.questionId);
            return (
                <div 
                    key={question.id} 
                    className={`${question.correct_answer.includes(+answer.answer) ? 'correct' : 'failed'} `}
                >   
                 
                    <div className="count_icon">
                        <span>{question.id}</span>
                    </div>
                 
                    {renderQuestionInfo(question.id,  answer.selectedOption, question)}
                </div>
            )
        })
    }

    return (
        <div className={'container result'}>
            {
                !isSendMessage && (
                    <SendResult 
                        percent={percent}
                        exactQuestion={exactQuestion}
                        allQuestionsCount={allQuestionsCount}
                        onSetIsSendMessage={setIsSendMessage}
                    />
                )
            }


            {
                isSendMessage && (
                    <>
                        <div className='question-result-info'>
                            <h2>Result</h2>
                            <p>You Scored {percent}%</p>
                            <p> {exactQuestion} of <span>{allQuestionsCount}</span></p>
                        </div>
                        <div className='question-result'>
                            {renderResultsData()}
                        </div>
                        <button  
                            className={'btn btn-primary'}
                            onClick={restart}
                        >
                            Restart
                        </button>
                    </>
                )
            }
        </div>
    )
};

export default QuestionResult;
 