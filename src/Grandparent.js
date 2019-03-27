import React from "react";
import Parent from "./Parent";
const Grandparent = props => {
  return (
    <div
      style={{
        background: "red",
        width: "80%",
        marginLeft: "10%",
        height: "80%",
        paddingTop: "5%"
      }}
    >
      Grandparent
      <Parent />
    </div>
  );
};

export default Grandparent;
