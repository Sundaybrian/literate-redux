import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

import SearchBar from "./components/layouts/SearchBar";

const App = () => {
  useEffect(() => {
    // initialize materialize js
    M.AutoInit();
  });
  return (
    <div className="App">
      <SearchBar />
      <h1>Hello</h1>
    </div>
  );
};

export default App;
