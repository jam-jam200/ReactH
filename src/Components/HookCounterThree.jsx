import React, { useState } from "react";

export default function HookCounterThree() {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={name.firstname}
          onChange={(event) => setName({ ...name, firstname: event.target.value })}
        />
        <input
          type="text"
          value={name.lastname}
          onChange={(event) => setName({ ...name, lastname: event.target.value })}
        />
        <button>Submit</button>
        <h2>
          Your name is {name.firstname} {name.lastname}
        </h2>
      </form>
    </div>
  );
}
