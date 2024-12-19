import React from 'react'
import { useState, useEffect } from 'react';

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div>
      <h1>{seconds}</h1>
      <div>
      <button onClick={handleStart}>Başlat</button>
      <button onClick={handleStop}>Dayandır</button>
      <button onClick={handleReset}>Sıfırla</button>
      </div>
    </div>
  );}

export default StopWatch