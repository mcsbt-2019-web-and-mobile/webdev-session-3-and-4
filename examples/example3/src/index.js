import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Base extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  getText() {
    if (this.state.clicked) {
      return "clicked!";
    } else {
      return "unclicked :(";
    }
  }

  handleClick = event => {
    let isClicked = this.state.clicked;
    this.setState({clicked: !isClicked});
  };

  render() {
    return (
      <button onClick={this.handleClick}>{this.getText()}</button>
    );
  }
}

ReactDOM.render(<Base />, document.getElementById('root'));
