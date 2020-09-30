import React, { useEffect } from 'react';
import { TimerValue } from '../Styled';
import { useDispatch } from 'react-redux';
import { setCounterValue } from './counterSlice';

const Timer = ({ isPaused, count }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let interval;
    if (isPaused) {
      clearInterval(interval);
    } else {
      interval = setInterval(() => {
        dispatch(setCounterValue(count + 1));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPaused, dispatch, count]);

  return <TimerValue>{count}</TimerValue>;
};

export default Timer;
