import React, { useState, useEffect } from "react";

export default function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("useEffect-updating document");
    document.title = `clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}
