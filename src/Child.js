import React from "react";

const Child = props => {
  console.log("props child", props);
  return (
    <div
      style={{
        background: "Green",
        width: "80%",
        marginLeft: "10%",
        height: "80%"
      }}
    >
      Child
      <div style={{ width: "80%", marginLeft: "10%", paddingTop: "10%" }}>
        <button
          onClick={() => {
            props.changeAction();
          }}
          style={{ width: "100%", height: "40px" }}
        >
          click me
        </button>
      </div>
    </div>
  );
};

export default Child;
