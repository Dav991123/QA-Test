import { QUIZ } from '../core/constants/actionTypes';

export const quizReducers = (state, action) => {
    switch(action.type) {
        case QUIZ.SET_CURRENT_ANSWER : return {
            ...state,
            currentAnswers: action.payload
        };
        case QUIZ.SET_CURRENT_QUESTION : return {
            ...state,
            currentQuestion: action.payload
        };
        case QUIZ.SET_QUESTIONS: return {
            ...state,
            questions: action.payload
        };
        case QUIZ.SET_COURSES_LIST: return {
            ...state,
            coursesList: action.payload
        };
        case QUIZ.SET_ERROR: return {
            ...state,
            error: action.payload
        };
        case QUIZ.SET_SHOW_RESULTS: return {
            ...state,
            showResults: action.payload
        };
        case QUIZ.SET_ANSWERS : return {
            ...state,
            answers: action.payload
        };
        case QUIZ.SET_EXACT_QUESTION: return {
            ...state,
            exactQuestion: action.payload
        };
        case QUIZ.SET_IS_AUTH: return {
            ...state,
            isAuth: action.payload
        };
        case QUIZ.SET_CURRENT_QUESTION: return {
            ...state,
            questionResult: action.payload
        };
        case QUIZ.SET_USER_AUTH: return {
            ...state,
            user: action.payload
        };
        case QUIZ.RESET_QUIZ : return {
            ...state,
            currentQuestion: 0,
            exactQuestion: 0,
            currentAnswers: '',
            answers: [],
            showResults: false,
            questionResult: [],
            error: ''
        }
        default:
            return state
    }
};
