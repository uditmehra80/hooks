import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: 'what is js',
    content: 'abc anv'
  },
  {
    title: 'what is react',
    content: 'aadjdadjd'
  },
  {
    title: 'what is node',
    content: 'dhdvbvddvdvs'
  }
]

function App() {
  return (
    <div className="ui container">
      <Accordion items={items} />
      <Search />
    </div>
  );
}

export default App;
