import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Line extends React.Component {
  render() {
    return <div id={this.props.position} className="line">{this.props.content}</div>;
  }
}

class Base extends React.Component {
  render() {
    return (
      <div id="base">
        <Line position="first" content="one"/>
        <Line position="second" content="two"/>
        <Line position="third" content="three"/>
        <Line position="fourth" content="CARAMBA!"/>                    
      </div>
    );
  }
}

ReactDOM.render(
  <Base/>,
  document.getElementById("root")
);
