import React, { createElement } from "react";
import ReactDOM, { render } from "react-dom";
import SearchParams from "./searchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <SearchParams />
    </div>
  );
};
render(<App />, document.querySelector("#root"));
