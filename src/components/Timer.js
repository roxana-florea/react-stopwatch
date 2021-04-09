import React from 'react';


const Timer = ({time, timerOn, setTimerOn, centiseconds, minutes, seconds, hours, lap, reset})=>{
    return (

        <>
        <h1>Stopwatch</h1>
      <div className="display">
        <span>{hours} : </span>
        <span>{minutes} : </span>  
        <span>{seconds} : </span>   
        <span>{centiseconds} </span> 
      </div>

      <div className="buttons">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)}>Start</button>
        )}
        {timerOn && 
        <div>
        <button onClick={() => setTimerOn(false)}>Pause</button>
        <button onClick={lap}>Lap</button>
        </div>
        }
        {!timerOn && time > 0 && (
          <button onClick={reset}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)}>Resume</button>
        )}
      </div>
      </>
    )
}


export default Timer;