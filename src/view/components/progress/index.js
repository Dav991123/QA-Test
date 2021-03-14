import React, { memo } from 'react';
import './index.css';

const Progress = ({total, current}) => {
    return (
        <div className={'question-progress'}>
            <h2>Question {current + 1} of {total}</h2>
        </div>
    )
}

export default memo(Progress);
