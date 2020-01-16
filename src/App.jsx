import React, { createElement } from "react";
import ReactDOM, { render } from "react-dom";
import SearchParams from "./searchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};
render(<App />, document.querySelector("#root"));
