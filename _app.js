import React, { useState } from 'react';

const Counter = ({ increment, buttonColor }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => {
      const newCount = prevCount + increment;
      return newCount > 10 ? 0 : newCount;
    });
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button
        onClick={handleIncrement}
        style={{ backgroundColor: buttonColor, color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}
      >
        Increment by {increment}
      </button>
    </div>
  );
};

export default Counter;
