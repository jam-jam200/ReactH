import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, GirlContext } from "../App";

export default function ComponentE() {
  const user = useContext(UserContext);
  const girl = useContext(GirlContext);
  return (
    <div>
      my name is {user} {girl} {user}
      <ComponentF />
    </div>
  );
}
