const parent = React.createElement(
    "div",{id:"parent"},[
    React.createElement("div",
    {id:"child"},[
    React.createElement("h1",{},"I am 3 rd argumnet"),
    React.createElement("h2",{},"I am 2 rd argumnet"),]),
    React.createElement("div",
    {id:"child"},[
    React.createElement("h1",{},"I am 3 rd argumnet"),
    React.createElement("h2",{},"I am 2 rd argumnet"),]),
]);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement(
    "h1",
    {id: "heading", abd : "cys"},
    "Hello React !!!!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

root1.render(parent);