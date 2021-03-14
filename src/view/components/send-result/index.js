import React, { useContext, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Input from '../input';
import StarRating from '../starRating';
import ReactTooltip from "react-tooltip";
import { useAlert } from 'react-alert';

import QuizContext from '../../../context/QuizContext';
import './index.css';
import Loading from '../loading';

export default function SendResult({percent, exactQuestion, allQuestionsCount, onSetIsSendMessage}) {
  const { state:{user} } = useContext(QuizContext);
  const [loading, setLoading] = useState(false);
  const [ starRating, setStarRating ] = useState(0);
  const alert = useAlert()


  function sendEmail(e) {
    e.preventDefault();
    if(!starRating) {
      alert.error("please rate");
      return false;
    }

    setLoading(true)

    emailjs.sendForm(
      'javascript_master_question', 
      'javascript_master_question',
      e.target,
      'user_MALPpwivVccnEy4UkODWk'
    )
      .then(() => {
        setLoading(false)
        onSetIsSendMessage(true)
      }, (error) => {
          setLoading(false)
          console.log(error.text);
          onSetIsSendMessage(false)
      });
  }


  return (
    <>
    <div className="send-email-content">
    <h2 className={'send-result-help-text'}>
         Fill in the input fields to see the result of the test
      </h2>
      <div>
        <form  onSubmit={sendEmail}>
            <Input 
              type={'email'}
              value={user.email}
              name={'user_email'}
            />
            <Input 
              type={'text'}
              label={'First Name'}
              name={'first_name'}
            />
            <Input 
              type={'text'}
              label={'Last Name'}
              name={'last_name'}
            />

            <div className="question-results-content">
              <div>
                <input 
                  type={'text'}
                  value={`You Scored ${percent}%`}
                  name={'percent'}
                  readOnly
                />
              </div>

              <div>
                <input 
                  type={'text'}
                  value={`${exactQuestion} of ${allQuestionsCount}`}
                  readOnly
                  name={'exact_question'}
                />
              </div>

              <div> 
                <input 
                  type={'text'}
                  value={` Rating ${starRating}`}
                  readOnly
                  name={'rating'}
                />
              </div>
            </div>

        {
          loading ? (
            <Loading />
          ) : (
            <button 
              data-tip data-for='send' 
            >
            send
          </button>
          )
        }

            <ReactTooltip id='send' place='bottom' effect='solid' clickable={true}>
                <StarRating 
                  starRating={starRating}
                  onSetStarRating={setStarRating}
                />
            </ReactTooltip>
        </form>
      </div>
    </div>
    </>

  );
}