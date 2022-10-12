import React from "react";
import { UserContext, GirlContext } from "../App";

export default function ComponentF() {
  return (
    <h1>
      <UserContext.Consumer>
        {(user) => {
          return (
            <GirlContext.Consumer>
              {(surname) => {
                return (
                  <h3>
                    {" "}
                    My name is {user} {surname}
                  </h3>
                );
              }}
            </GirlContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </h1>
  );
}
