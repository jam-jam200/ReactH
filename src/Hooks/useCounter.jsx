import { useState } from "react";

function useCounter(initialState = 0, value) {
  const [count, setcount] = useState(initialState);

  const increment = () => {
    setcount((prevCount) => prevCount + value);
  };

  const decrement = () => {
    setcount((prevCount) => prevCount - value);
  };

  const reset = () => {
    setcount(initialState);
  };

  return [count, increment, decrement, reset];
}

export default useCounter;
