import React from "react";

function Title() {
  console.log("Rendering title");
  return (
    <div>
      <h2>useCallBack Hooks</h2>
    </div>
  );
}
export default React.memo(Title);
