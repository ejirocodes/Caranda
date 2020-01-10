import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    {
      id: "heading-main"
    },
    [
      React.createElement("h1", {}, "Adopt me!"),
      React.createElement(Pet, {
        name: "Fanandre",
        animal: "Cat",
        breed: "maine coon"
      }),
      React.createElement(Pet, {
        name: "Dren",
        animal: "Dog",
        breed: "dimna"
      }),
      React.createElement(Pet, {
        name: "Anone",
        animal: "Rabbit",
        breed: "ecap"
      })
    ]
  );
};
ReactDOM.render(React.createElement(App), document.querySelector("#root"));
