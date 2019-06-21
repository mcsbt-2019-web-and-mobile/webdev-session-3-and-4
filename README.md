# Sessions 3 and 4, React

In this session we'll learn about React.

## Starting the development server

```
$ npm start
```

## Creating new React applications

Once you've NodeJS installed, you can create a new React app with the
followign command:

```
npx create-react-app appName
```

> NPX is a NodeJS tool for executing packages, in our case
> `create-react-app`.  Learn more about `create-react-app`
> [here](https://github.com/facebook/create-react-app)

This will create a `appName` folder within the current directory with
the React project.

## Compiling the slides

```
pandoc -t revealjs \
  -s -o slides.html slides.md \
  -V revealjs-url=https://revealjs.com \
  -V theme=beige \
  --slide-level 2
```
