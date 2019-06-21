import React from 'react';
import ReactDOM from 'react-dom';

class Comp extends React.Component {
  render() {
    return <button>{this.props.value}</button>;
  }
}

ReactDOM.render(
  <Comp value="this is the button name"/>,
  document.getElementById("root")
);
