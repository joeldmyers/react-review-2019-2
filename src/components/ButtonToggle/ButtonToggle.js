import React, { useState } from 'react';

const ButtonToggle = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button type="button" onClick={countUp}>
        Go Up
      </button>
      <button type="button" onClick={countDown}>
        Go Down
      </button>
      <h3>{count}</h3>
    </div>
  );
};

export default ButtonToggle;
