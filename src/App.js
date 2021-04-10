import React from "react";
import "./style.css";
import Nav from "./Nav.js";


const App = () => {
  return (
    <div className="App">
      <Nav/>
      {/* components are have self closing tags */}
      <main className="App-content">
        <span>Empty</span>
      </main>
    </div>
  );
}

export default App;