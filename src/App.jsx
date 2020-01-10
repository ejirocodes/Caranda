import React, { createElement } from "react";
import ReactDOM, { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // Without JSX
  // return createElement(
  //   "div",
  //   {
  //     id: "heading-main"
  //   },
  //   [
  //     createElement("h1", {}, "Adopt me!"),
  //     createElement(Pet, {
  //       name: "Fanandre",
  //       animal: "Cat",
  //       breed: "maine coon"
  //     }),
  //     createElement(Pet, {
  //       name: "Dren",
  //       animal: "Dog",
  //       breed: "dimna"
  //     }),
  //     createElement(Pet, {
  //       name: "Anone",
  //       animal: "Rabbit",
  //       breed: "ecap"
  //     })
  //   ]
  // );

  // Code with jsx
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="Fanandre" animal="Cat" breed="Maine Coon" />
      <Pet name="Dren" animal="Dog" breed="Dimna" />
      <Pet name="Anone" animal="Rabbit" breed="Eslat" />
    </div>
  );
};
render(<App />, document.querySelector("#root"));
