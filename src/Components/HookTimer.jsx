import React, { useState, useEffect, useRef } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  });

  return (
    <div>
      <h2> Hook timer - {timer}</h2>
      <button onClick={() => clearInterval(intervalRef.current)}>
        {" "}
        clear hook
      </button>
    </div>
  );
}

export default HookTimer;
