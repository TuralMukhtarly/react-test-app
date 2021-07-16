import React from "react";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
      </div>
    </BrowserRouter>
  );
}

export default App;
