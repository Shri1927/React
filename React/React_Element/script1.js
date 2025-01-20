

const container = React.createElement('div', { className: 'container' },
    React.createElement('section',{}, 
        React.createElement('p', {}, 'jhdbvhabibjbhbjhhbhjvh')
    )
);

// ReactDOM.createRoot(document.querySelector('#root'));
// ReactDOM.render(container);


// // const h2 = React.createElement('h2', { className: 'heading' }, 'Hello World');
ReactDOM.render(container, document.getElementById('root'));


// // const h2 = {
// //     $$typeof: Symbol.for("react.element"),
// //     type: "h2",
// //     key: null,
// //     ref: null,
// //     props: {
// //         className: "heading",
// //         children: "Hello World"
// //     },
// // }
// ReactDOM.createRoot(document.getElementById('root')).render(
//     {
//         $$typeof: Symbol.for("react.element"),
//         type: "h2",
//         key: null,
//         ref: null,
//         props: {
//             children: [
//                 {
//                     $$typeof: Symbol.for("react.element"),
//                     type: "p",
//                     key: null,
//                     ref: null,
//                     props: {
//                         children: "Hello World"
//                     },
//                 }
//             ]
//         },
//     }
// );