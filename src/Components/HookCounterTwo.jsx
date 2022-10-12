import React, { useState } from "react";

export default function HookCounterTwo() {
  const initialState = 0;
  const [count, setCount] = useState(initialState);
  const incrementByFive = () => {
    for (let i = 0; i < 5; +i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      Count: {count}
      <button
        onClick={() => {
          setCount(initialState);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        Decrement
      </button>
      <button onClick={incrementByFive}>5times</button>
    </div>
  );
}
