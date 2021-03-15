import React, { useContext, useState, useEffect, useRef, memo } from 'react';
import QuizContext from '../../../context/QuizContext';
import CodeEditor from '../editor';
import { useOnClickOutside } from '../../../core/Hooks/useOnClickOutside';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import './index.css';

const Question = ({quizDescription, questionData}) => {
    const [questionState, setQuestionState] = useState('')
    const editorCode = useRef(null);
    const { state: { currentQuestion, questions,  } } = useContext(QuizContext);
   

    return (
        <>
            <div 
                className='question-code-editor' 
            >
            {
                questionData
            }
            </div>
           
            <div className="quiz_description_content">
                <p>{quizDescription}</p>
            </div>
        </>
    )
};

export default memo(Question);