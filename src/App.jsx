import React,  {useState, createElement} from "react";
import ReactDOM, { render } from "react-dom";
import SearchParams from "./searchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import ThemeContext from './ThemeContext'

const App = () => {
  const theme = useState("#004445");
  return (
    
      <ThemeContext.Provider value={theme}>
        <div>
          <header>
            <Link to="/">Adopt Me</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
   
  );
};
render(<App />, document.querySelector("#root"));
