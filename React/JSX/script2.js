
const user = 'shri'

const container = <div>
    <h1>Hello World from {user}!</h1>
    <p>This is a paragraph </p>
</div>

console.log(container);


ReactDOM.render(container, document.getElementById('root'));