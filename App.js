


const parent = React.createElement("div",{ id: "parent"})
    const heading = React.createElement("h1",{id :"heading" ,xyz : "abc"},"Hello World from React !");
    console.log(heading);

    const root1 = ReactDOM.createRoot(document.getElementById("root"));

    root1.render(heading);

