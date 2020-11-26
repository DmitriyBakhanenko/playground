import React, { useState, useEffect } from 'react';

let timeOut;

export default function App() {
  const [timer, setTimer] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [milisec, setMilisec] = useState(0);
  const [timerOnPause, setTimerOnPause] = useState(false);

  useEffect(() => {
    if (!timer) {
      setSeconds(0);
      setMinutes(0);
      setMilisec(0);
      setTimerOnPause(false);
      return;
    } else if (timerOnPause) return clearTimeout(timeOut);
    else if (!timerOnPause) {
      timeOut = setTimeout(() => {
        if (milisec === 999) {
          if (seconds === 9) {
            setMinutes(minutes + 1);
            setSeconds(0);
            setMilisec(0);
            return;
          }
          setSeconds(seconds + 1);
          setMilisec(0);
          return;
        }
        setMilisec(milisec + 1);
      }, 1);
    }
    // eslint-disable-next-line
  }, [timer, timerOnPause, milisec]);

  return (
    <>
      <h1>
        The time is {minutes} : {seconds} : {milisec}
      </h1>
      <button onClick={() => setTimer(!timer)}>Start</button>
      <button onClick={() => setTimerOnPause(!timerOnPause)}>Pause</button>
    </>
  );
}
