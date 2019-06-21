import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

class SearchInput extends React.Component {
  render() {
    return <input id="search" className="form-control" type="text" placeholder="input something" onKeyPress={this.props.handleKeyPress}/>
  }
}

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "" 
    };
  }

  handleKeyPress = event => {
    this.setState({query: event.target.value});
  };

  render() {
    return (
      <div className="form-group">
        <label htmlFor="search">search something!</label>
        <SearchInput handleKeyPress={this.handleKeyPress}/>
        <small id="emailHelp" className="form-text text-muted">Your query is: <b>{this.state.query}</b></small>
      </div>
    );
  }
}

ReactDOM.render(<SearchBox />, document.getElementById('root'));
