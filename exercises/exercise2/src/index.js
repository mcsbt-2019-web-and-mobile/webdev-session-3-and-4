import React from 'react';
import ReactDOM from 'react-dom';

class Menu extends React.Component {
  render() {
    let items = ["home", "store", "about us"];
    
    return (
      <ul className="nav nav-pills"></ul>
    );
  }
}

ReactDOM.render(
  <Menu />,
  document.getElementById('root')
);
