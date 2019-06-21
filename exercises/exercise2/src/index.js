import React from 'react';
import ReactDOM from 'react-dom';

class Item extends React.Component {
  render() {
    let active = this.props.active ? "active" : "";
    let classes = `nav-link ${active}`;
    return (<li className="nav-item"><a className={classes} href="#a" onClick={() => this.props.handleOnClick()}>{this.props.name}</a></li>);
  }
}

class Menu extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  onClick = (name) => {
    this.setState({
      active: name
    })
  };
  
  render() {
    let items = ["home", "store", "about us"];
    
    return (
      <ul className="nav nav-pills">
        {items.map((name) =>
          <Item name={name} active={this.state.active === name} handleOnClick={() => this.onClick(name)}/>
        )}
      </ul>
    );
  }
}

ReactDOM.render(
  <Menu />,
  document.getElementById('root')
);
