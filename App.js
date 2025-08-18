import React from "react";
import ReactDOM from "react-dom/client";

const Head=()=>(
    <>
        <App></App>;
         <h1>hello world</h1>;
    </>
)


let i=React.createElement("h1",{id:"h1"},"hello react avbgtgfh");
let root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Head></Head>);
const App = () => (
    <h1>app is running</h1>
)
