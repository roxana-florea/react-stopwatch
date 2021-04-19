import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Timer from './components/Timer';
import List from './components/List';

const App = () => {
  const firstrender = useRef(true);
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [laps, setLaps] = useState([]);
  let centiseconds = ('0' + ((time / 10) % 100)).slice(-2);
  let seconds = ('0' + Math.floor((time / 1000) % 60)).slice(-2);
  let minutes = ('0' + Math.floor((time / 60000) % 60)).slice(-2);
  let hours = ('0' + Math.floor(time / 3600000)).slice(-2);

  useEffect(() => {
    let interval = 0;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  const recordLap = () => {
    let captureTime = `${hours} : ${minutes} : ${seconds} : ${centiseconds}`;

    setLaps([...laps, captureTime]);
  };

  const resetEverything = () => {
    setTime(0);
    setLaps([]);
  };

  // saving the lap list in local storage

  useEffect(() => {
    if (firstrender.current) {
      firstrender.current = false;
    } else {
      localStorage.setItem('Laps', JSON.stringify([...laps]));
    }
  }, [laps]);


  useEffect(() => {
    if (localStorage.getItem('Laps') !== null) {
      const newLaps = localStorage.getItem('Laps');
      setLaps((l) => JSON.parse([...l, newLaps]));
    }
  }, []);




  return (
    <div className="App">
      <Timer
        time={time}
        setTimerOn={setTimerOn}
        timerOn={timerOn}
        centiseconds={centiseconds}
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        lap={recordLap}
        reset={resetEverything}
      />
      <List laps={laps} />
    </div>
  );
};

export default App;
