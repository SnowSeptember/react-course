import React from "react";
import Dropdown_component from "./components/Dropdown_component";
import Listbox_component from "./components/Listbox_component";
import Textbox_component from "./components/Textbox_component";

function App() {
  const array = ["Jisoo", "Jennie", "Rosé", "Lisa"];
  return (
    <div>
      <h1>Mock Project 1 - DuyGD</h1>
      <div>
        <div>
          <Textbox_component />
          <Dropdown_component param={array} />
        </div>
        <div>
          <Listbox_component />
        </div>
      </div>
    </div>
  );
}

export default App;