import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const employees = [
  {name: "Pepe", role: "pizza eater", email: "pepe@pizza.com"},
  {name: "Anthony", role: "lead pizza eater", email: "anthony@pizza.com"},
  {name: "Luis", role: "pizza eater", email: "luis@pizza.com"},
  {name: "John", role: "CEO", email: "john@pizza.com"},
  {name: "Xi", role: "CPEO (Chief Pizza Eating Oficer)", email: "xi@pizza.com"},
];

class SearchBox extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="search-box">Search</label>
        <input type="text" className="form-control" id="search-box" placeholder="Who are you looking for?" onChange={this.props.onChange}/>
        <small id="query" className="form-text text-muted">query: <strong>{this.props.query}</strong></small>
      </div>
    );
  }
}

class Person extends React.Component {
  render() {
    let displayName = `${this.props.name} <${this.props.email}>`;
    return (
      <li className="list-group-item"><strong>{this.props.role}</strong> {displayName}</li>
    );
  }
}

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      query: ""
    };
  }

  onChange = (event) => {
    this.setState({query: event.target.value});
  };
  
  render() {
    let people = this.props.people;

    if (this.state.query !== "") {
      people = people.filter((person) => {
        return person.name.includes(this.state.query);
      });
    }
    
    return (
      <div className="directory">
        <SearchBox onChange={this.onChange}/>
        <ul className="list-group">
          {people.map((person) => {
            return <Person name={person.name} role={person.role} email={person.email}/>;
          })}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <Directory people={employees}/>,
  document.getElementById('root')
);
