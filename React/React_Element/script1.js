// const h2 = React.createElement('h2', { className: 'heading' }, 'Hello World');
// ReactDOM.render(h2, document.getElementById('root'));


// const h2 = {
//     $$typeof: Symbol.for("react.element"),
//     type: "h2",
//     key: null,
//     ref: null,
//     props: {
//         className: "heading",
//         children: "Hello World"
//     },
// }
ReactDOM.createRoot(document.getElementById('root')).render(
    {
        $$typeof: Symbol.for("react.element"),
        type: "h2",
        key: null,
        ref: null,
        props: {
            className: "heading",
            children: "Hello World"
        },
    }
);