# React JSX Fundamentals

## Introduction
This document covers the basics of JSX in React.

## What is JSX?
JSX stands for JavaScript XML. It allows you to write HTML inside JavaScript and place them in the DOM without using functions like `createElement()` or `appendChild()`.

## Why JSX?
- **Simplicity**: JSX makes it easier to write and add HTML in React.
- **Readability**: JSX code is easier to understand and maintain.
- **Efficiency**: JSX performs optimizations while compiling to JavaScript.

## Basic Example
```jsx
const element = <h1>Hello, world!</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

## Embedding Expressions in JSX
You can embed any JavaScript expression in JSX by wrapping it in curly braces `{}`.
```jsx
const name = 'John';
const element = <h1>Hello, {name}!</h1>;
```

## JSX is an Expression Too
After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

## Specifying Attributes with JSX
You can use quotes to specify string literals as attributes, and curly braces to embed a JavaScript expression.
```jsx
const element = <img src={user.avatarUrl} />;
```

## JSX Represents Objects
Babel compiles JSX down to `React.createElement()` calls.
```jsx
const element = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);
```

## Conclusion
JSX is a powerful syntax extension for JavaScript that makes writing React components easier and more intuitive.

## References
- [React Documentation](https://reactjs.org/docs/introducing-jsx.html)
- [JSX in Depth](https://reactjs.org/docs/jsx-in-depth.html)