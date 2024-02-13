// const heading = document.createElement("h1");
//     heading.innerHTML = 'Welcome to Namaste React!';
//     const root = document.getElementById('root');
//     root.appendChild(heading);


const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", { id: "heading1" }, 'Welcome to react H1!'),
        React.createElement("h2", { id: "heading1" }, 'Welcome to react H2!')
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", { id: "heading1" }, 'Welcome to react H1!'),
        React.createElement("h2", { id: "heading2" }, 'Welcome to react H2!')
    ])
]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);