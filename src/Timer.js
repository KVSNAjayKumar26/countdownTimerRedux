import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setTime,
  decrementTime,
  toggleRunning,
  resetTimer,
} from './countdownSlice';

const Timer = () => {
  const dispatch = useDispatch();
  const { time, isRunning } = useSelector((state) => state.countdown);

  const handleSetTime = (e) => {
    const value = Number(e.target.value);
    dispatch(setTime(value * 60)); // Convert minutes to seconds
  };

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        dispatch(decrementTime());
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, dispatch]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Countdown Timer</h1>
      <div>
        <input
          type="number"
          placeholder="Enter minutes"
          onChange={handleSetTime}
          disabled={isRunning}
        />
        <button onClick={() => dispatch(toggleRunning())}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={() => dispatch(resetTimer())}>Reset</button>
      </div>
      <h2>{formatTime(time)}</h2>
    </div>
  );
};

export default Timer;
