import React from 'react';
import App from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from '../modules/counter';

const AppContainer = () => {

  const number = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase())
  };
  const onDecrease = () => {
    dispatch(decrease())
  };

  return (
    <App number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default AppContainer;
