import { useState, useEffect } from 'react';


export const Timer = ({currentQuestionTimer}) => {
    const [timer, setTimer] = useState(null);
    const [running, setRunning] = useState(false);
    useEffect(() => {
        let seconds = currentQuestionTimer % 60;
        let minutes = Math.floor(currentQuestionTimer / 60);
        minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
        seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
        const resultTimer = minutes + ':' + seconds;
        setTimer(resultTimer);
    }, [currentQuestionTimer]);


    useEffect(() => {
        if(timer) {
            setRunning(true)
        }else {
            setRunning(false)
        }
    }, [timer]);

    useEffect(() => {

    });

 
    let interval = setInterval(() => {
          const newCount = timer - 1;
        setTimer(newCount >= 0 ? newCount : 0)
    }, 1000);
    


    const handleStop = (delay) => {
        if(timer === 0) {
          clearInterval(this.timer);
          setRunning(false);
        }else if(!delay) {
            clearInterval(this.timer);
            setRunning(false);
        }
      }
    return {
        timer,
        running,
        handleStop
    }
}

