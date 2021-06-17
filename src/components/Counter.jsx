import React from 'react';

const Counter = ({ number, onDecrease, onIncrease }) => {
  return (
    <section>
      <div>{number}</div>
      <button onClick={onDecrease}>-</button>
      <button onClick={onIncrease}>+</button>
    </section>
  );
}

export default Counter;