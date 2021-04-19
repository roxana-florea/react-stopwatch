import React from 'react';


const Timer = ({time, timerOn, setTimerOn, centiseconds, minutes, seconds, hours, lap, reset})=>{
    return (

        <>
        <h1>Stopwatch</h1>
      <div>
        <span>{hours} : {minutes} : {seconds} : {centiseconds}</span> 
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
          <div>
          <button onClick={reset}>Reset</button>
          <button onClick={() => setTimerOn(true)}>Resume</button>
          </div>
        )}
      </div>
      </>
    )
}


export default Timer;