import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";

function App({ children }) {
  return (
    <div className="App">
      <NavBar> </NavBar>
      <header className="App-header">{children}</header>
    </div>
  );
}

export default App;
