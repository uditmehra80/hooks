import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'The Shade of Blue',
    value: 'blue'
  }
];

function App() {

  const [selectedColor, setSelectedColor] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="ui container">
      <button className="ui button" onClick={() => setShowDropdown(!showDropdown)}>Toggle dropdown</button>
      {showDropdown
        ?
        <Dropdown onSelectedChange={setSelectedColor} selectedColor={selectedColor} options={options} />
        : null
      }
      {/* <Accordion /> */}
      {/* <Search /> */}
    </div>
  );
}

export default App;
