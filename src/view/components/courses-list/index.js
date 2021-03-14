import React from 'react';
import './index.css';
  
const CoursesList = ({level: coursesLevel, onSetLevel}) => {
    console.log(coursesLevel);
    const onChangeInput = e => {
        const level = coursesLevel;
        const { name, checked } = e.target;
        if(checked) {
            level.push(name)
        }else {
            const index = level.findIndex((level) => name === level)
            level.splice(index, 1)
         
        }
        onSetLevel([...level])
    }
    
    return (
        <div class="courses-container">
            <ul class="ks-cboxtags">
                <li>
                    <input 
                        type="checkbox" 
                        id="checkboxFour"
                        value="Moondancer"
                        name={'advanced'}
                        onChange={onChangeInput}
                    />
                    <label for="checkboxFour">advanced JS</label>
                </li>
                <li>
                    <input 
                        type="checkbox" 
                        id="checkboxFive" 
                        value="Surprise" 
                        name={'beginner'}
                        onChange={onChangeInput}
                    />
                    <label for="checkboxFive">beginner JS</label>
                </li>  
            </ul>
        </div>
    )
}
export default CoursesList;