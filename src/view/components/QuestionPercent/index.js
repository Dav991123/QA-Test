import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import './index.css';


const QuestionPercent = () => {
    const percentage = 80;
 
    return (
       <div className='question-percent'>
<CircularProgressbar
  value={percentage}
  text={`${percentage}%`}
  styles={{
    root: {},
    path: {
      stroke: `rgba(62, 152, 199, ${percentage / 100})`,
      strokeLinecap: 'butt',
      transition: 'stroke-dashoffset 0.5s ease 0s',
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    trail: {
      stroke: '#d6d6d6',
      strokeLinecap: 'butt',
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    text: {
      fill: '#f88',
      fontSize: '20px',
    },
    background: {
      fill: '#3e98c7',
    },
  }}
/>
       </div>
    )
}

export default QuestionPercent;