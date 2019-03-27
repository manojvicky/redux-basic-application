import React from "react";
import Child from "./childConatiner";
const Parent = props => {
  return (
    <div
      style={{
        background: "blue",
        width: "80%",
        marginLeft: "10%",
        height: "80%"
      }}
    >
      Parent
      <Child />
    </div>
  );
};

export default Parent;
