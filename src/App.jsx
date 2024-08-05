import React from "react";
import { createRoot } from "react-dom"

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.animal),
    React.createElement("h2", {}, props.name),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Ritz",
      breed: "Orange Cat",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Ruby",
      breed: "Multicolored Cat",
    }),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Tank",
      breed: "French Bulldog",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
