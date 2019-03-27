import React from "react";
import Grandparent from "./Grandparent";
export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    console.log("Index", this.props);
    return (
      <div
        className="App"
        style={{
          background: this.props.change ? "gold" : "grey",
          width: "100%",
          height: "75vh",
          paddingTop: "10%"
        }}
      >
        {" "}
        Main Body
        <div>{this.props.change ? "ON" : "OFF"}</div>
        <Grandparent />
      </div>
    );
  }
}
