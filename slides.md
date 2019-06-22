---
title: Web Development
subtitle: sessions 3 and 4
author: Pepe García
---

# React

_A Javascript library for building user interfaces_

# Components

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

## state

There are some components that need an internal state.  We use
internal state to make components remember some data.  It can be
simple values such as a boolean flag, or an integer, or bigger things
such an object.

## state. Example3

Let's see an example of a component using state.  Open example3.

# lifting state

State is internal to the component, and can't be inspected from the
outside.  This makes it **very** important to think ahead of time
where the state should be in the components.

## lifting state

Whenever you have a parent component and a child component and they
need to share state, the way to go is to store the state in the parent
component and pass it downstream to their children **as props**.

## lifting state. Example4

Let's see example4.

## lifting state. exercise2

Do exercise2.

# Wrapping up exercise

open exercise3.

# Recap

## React

A JS library for building user interfaces.

## Components

Each one of the pieces of React UI.  They have some meaning in the
react interface.

## Props

Input data for components.

## State

Data internal to the component that components remember.


## bibliography

- [react docs](https://reactjs.org)
- [adalab book](https://books.adalab.es/materiales-front-end-f)
