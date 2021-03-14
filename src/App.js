import React, { useReducer, useEffect, useState } from 'react';
import QuizContext from './context/QuizContext';
import AlertTemplate from 'react-alert-template-basic';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import { JavaScriptQuestions } from './questions-data/javaScriptQuestions';

import { quizReducers } from './reducers/quizReducers';
import LocalStorageHelper from './core/helpers/localStorageHelper';
import QuestionsList from './view/pages/questionsList';
import { base } from './base';
import UserAccount from './view/pages/userAccount';
import Quiz from './view/pages/question';
import Loading from './view/components/loading';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { QUIZ } from './core/constants/actionTypes';
import './App.css'

const App = () => {
    const [loading, setLoading] = useState(false);
    const initialState = {
        questions: [],
        currentQuestion:  0,
        currentAnswers: '',
        answers: [],
        showResults: false,
        error: '',
        questionResult: [],
        exactQuestion: 0,
        user: null,
        isAuth: false,
        coursesList: []
    };

    const options = {
        position: positions.TOP_RIGHT,
        timeout: 3000,
        offset: '10px',
        transition: transitions.FADE
    }
    const [state, dispatch] = useReducer(quizReducers, initialState);

    console.log({state});
    const { currentQuestion, answers } = state

    useEffect(() => {
        LocalStorageHelper.setItem('currentQuestion', currentQuestion);
        localStorage.setItem('answers', JSON.stringify(answers))
    })

    const authListener = () => {
        setLoading(true)
        base.auth().onAuthStateChanged(user => {
            if(user) {
                dispatch({type: QUIZ.SET_USER_AUTH, payload: user});
                dispatch({type: QUIZ.SET_IS_AUTH, payload: true});
                setLoading(false)
            }else {
                dispatch({type: QUIZ.SET_USER_AUTH, payload: null});
                dispatch({type: QUIZ.SET_IS_AUTH, payload: false});
                setLoading(false)
            }
        })
    }

    useEffect(() => {
        authListener();
    }, []);


    
   if(loading) {
       return (
           <div className='loading-container'>
               <Loading />
           </div>
       )
   }

    return (
        <AlertProvider template={AlertTemplate} {...options}>
            <QuizContext.Provider value={{state, dispatch}}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={QuestionsList}/>
                        <Route exact path="/exam-tests/:quizId" component={Quiz}/>
                        <Route exact path={'/login'} component={UserAccount} />
                    </Switch>
                </Router>
            </QuizContext.Provider>
        </AlertProvider>
    )

};
export default App;
