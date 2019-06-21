---
title: Web Development
subtitle: sessions 3 and 4
author: Pepe García
---

# React

_A Javascript library for building user interfaces_

# Core components

React interfaces are based in components.  What is a component?  A
component is a unit of functionality in the UI.

## 

Components are pieces of the UI that may take user input and store
some internal state.

##

```js
class Line extends React.Component {
  render() {
    return (
	  <div id={this.props.position} className="line">
	  {this.props.content}
	  </div>;
	);
  }
}
```

There's a lot of information here, let's go line by line:

## creating the class

In order to create a React component, we extend the React.Component
class.

```js
class Line extends React.Component {
```

## the render method

```js
  render() {
```

the render is the most important one in React.  It tells the browser
how to represent this component in HTML.

## JSX

```js
	  <div id={this.props.position} className="line">
	  {this.props.content}
	  </div>;
```

React uses a special extension to JavaScript called JSX.  It allows us
to _embed_ HTML inside JS.

## JSX

```js
	  <div id={this.props.position} className="line">
	  {this.props.content}
	  </div>;
```

we can use JS expressions inside JSX code by putting them between brackets (`{}`).

## the whole picture back

```js
class Line extends React.Component {
  render() {
    return (
	  <div id={this.props.position} className="line">
	  {this.props.content}
	  </div>;
	);
  }
}
```

## Instantiating components

Once we have declared a component in React, we can instantiate it as
if it was a new HTML tag!

```js
<Line />
```

## See example1

go to `github.com/mcsbt-2019-web-and-mobile/webdev-session-3-and-4`
and fork it **in your account**.

Then, **clone your fork** in your computer and open `examples/example1`

# props

Properties are the inputs of data of components.

## passing props to components

We pass properties to components as if they were HTML attribures.

```js
<MyComponent name1="value1" name2="value2"/>
```

## using props

We use props in methods inside the component by accessing the
`this.props` object.  From there we'll be able to access the props
directly.

## example2

See example2

## exercise1

# state

## web architecture
## components
## props
## state
