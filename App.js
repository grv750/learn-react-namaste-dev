import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1",{
    id:"abc",
    className:"def"
},"heading 1");
const heading2 = React.createElement("h2",{
    id:"ghi",
    className:"jkl"
}, "heading 2");
const container = React.createElement("div",{
    id:"container",
    className:"containerName"
}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(container);