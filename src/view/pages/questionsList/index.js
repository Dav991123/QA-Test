import React, { useEffect, useState, useContext } from 'react';
import { database } from '../../../base';
import { useHistory } from  'react-router-dom';
import './index.css';

const QuestionsList = () => {
    
    const [quizData, setQuizData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory()

    useEffect(() => {
        database.ref('/questions').on('value', e => {
            const data = Object.values(e.val()) 
            setQuizData(data);
            setIsLoading({
              ...isLoading,
              getQuiz: false
            })
          });
    }, []);

    const handleStateQuiz = (item) => {
        history.push(`/exam-tests/${item.id}`)
    };


    console.log(quizData, 'quizData');
    return (
        <div className="quiz-list-content">

            {
                quizData.map((item) => {
                    return (
                        <div className="quiz_item">
                        {
                            quizData.map((item, index) => {
                                return (
                                    <div className="quiz-item" onClick={() => handleStateQuiz(item)}>
                                        <img src={item.imgUrl} alt={item.title} />
                                        <div>
                                            <h2>{item.title}</h2>
                                            <p>{item.description}</p>
                                            <span>{item.dt}</span>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                    )
                })
            }
        </div>
    )
};

export default QuestionsList;