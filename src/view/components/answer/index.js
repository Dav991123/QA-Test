import React, { memo } from 'react';
import { QUIZ } from '../../../core/constants/actionTypes'

const Answer = ({letter, answer, selected, label, dispatch, onSetSelectedAnswer}) => {
    const handleClick = e => {
        onSetSelectedAnswer(null)
        dispatch({type: QUIZ.SET_CURRENT_ANSWER, payload: e.target.value})
        dispatch({type: QUIZ.SET_ERROR, payload: ''})
    }
        
    const classes = ['answer'];
    
    if (selected) {
        classes.push('selected')
    }

    return (
        <>
            <button 
                value={letter} 
                className={classes.join(' ')}
                onClick={handleClick}
            >
                <span className={'letter'}>{label}.</span>
                {answer}          
            </button>
        </>
    )
};

export default memo(Answer);
