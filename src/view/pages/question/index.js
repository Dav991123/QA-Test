import React, { useContext, useEffect, memo, useState } from 'react';
import QuizContext from '../../../context/QuizContext';
import QuestionResult from '../../components/question-result';
import Progress from '../../components/progress';
import Question from '../../components/question';
import Answers from '../../components/answers';
import GoBackQuiz from '../../components/goBackQuiz';
import NextQuiz from '../../components/nextQuiz';
import { JavaScriptQuestions } from '../../../questions-data/javaScriptQuestions';
import { rootQuestions } from '../../../base';
import { QUIZ } from '../../../core/constants/actionTypes';
import { useHistory } from "react-router-dom";
import Logout from '../../components/logout';

const Quiz = (props) => {
    const quizId = props.match.params.quizId;
    const [loading, setLoading] = useState(false);
    const { state: { showResults, answers, currentQuestion, isAuth, questions }, dispatch } = useContext(QuizContext);
    const currentQuiz = questions[currentQuestion];

    let history = useHistory();

    useEffect(() => {
        setLoading(true);
        rootQuestions.once('value')
        .then(snapshot => {
            const { questionsList } = snapshot.child(quizId).val();
            setLoading(false);
            dispatch({type: QUIZ.SET_QUESTIONS, payload: questionsList})
        });
    }, [isAuth]);

    if(loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    // useEffect(() => {
    //     if(!isAuth) {
    //         history.push('/login')
    //     }
    // }, [isAuth]);

    console.log(currentQuiz, 'currentQuiz');

    const renderQuestion = () => {
        if(showResults) {            
            return (
                <QuestionResult answers={answers}/>
            )
        }else {
            return (
                <div> 
                    <Logout />
                    <Progress 
                        total={questions.length}
                        current={currentQuestion}
                    />
                    <div className={'container'}>
                        <Question 
                            questionData={currentQuiz?.questionData}
                            quizDescription={currentQuiz?.quizDescription}
                        />
                        <Answers 
                             answerList={currentQuiz?.answerList}
                             correctAnswer={currentQuiz?.correct_answer}
                        />
                        <div className={'next-and-back-button'}>
                            <NextQuiz />
                            {/* <GoBackQuiz /> */}
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <div>
            {renderQuestion()}
        </div>
    )
};
export default memo(Quiz);