import React from 'react';
import { CountValue } from '../Styled';
import { useSelector } from 'react-redux';

const DisplayCounter = () => {
  const count = useSelector((state) => state.counter.pausedValue);

  return <CountValue bgColor="#2196f3">Count: {count}</CountValue>;
};

export default DisplayCounter;
