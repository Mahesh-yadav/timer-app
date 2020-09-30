import React from 'react';
import { CounterContainer, Button } from '../Styled';
import Timer from './Timer';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCounterValue,
  setPausedValue,
  pauseResumeTimer,
} from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const isPaused = useSelector((state) => state.counter.isPaused);

  const dispatch = useDispatch();

  const toggleTimer = () => {
    if (!isPaused) {
      dispatch(setPausedValue(count));
    }

    dispatch(pauseResumeTimer());
  };

  return (
    <CounterContainer>
      <Timer isPaused={isPaused} count={count} />
      <Button onClick={toggleTimer} bgColor="orangered" shadow="#ff4500b5">
        {isPaused ? 'Resume Timer' : 'Pause Timer'}
      </Button>
      <Button
        bgColor="#2196f3"
        shadow="#2196f3d9"
        onClick={() => dispatch(setCounterValue(0))}
      >
        Reset Timer
      </Button>
    </CounterContainer>
  );
};

export default Counter;
