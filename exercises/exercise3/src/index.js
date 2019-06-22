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

class Directory extends React.Component {
  render() {
    return (
      <div className="directory">
        <ul className="list-group">
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <Directory people={employees}/>,
  document.getElementById('root')
);
