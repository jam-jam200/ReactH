import React, { useState, useMemo } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>CounterOne - {counterOne}</button>
        <span>{isEven ? "Even" : "odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>CounterOne - {counterTwo}</button>
      </div>
    </div>
  );
}

export default Counter;
