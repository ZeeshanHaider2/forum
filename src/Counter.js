import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  //const increment = () => setCount((previousCount) => previousCount + 1);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <p>you have clicked the counter {count}times</p>
      <button onClick={increment}> Please click </button>
      <button onClick={decrement}> Please click </button>
    </div>
  );
};

export default Counter;
