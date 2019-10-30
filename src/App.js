import React, { useState, useEffect } from "react";

import "./css/webflow.css";
import "./css/app.css";

import Input from "./components/Input";
import TaskList from "./components/TaskList";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const localItems = localStorage.getItem("items");
    if (!localItems) {
      setItems(
        { task: "Buy Groceries" },
        { task: "Talk to Mom" },
        { task: "Take out cash for trip" }
      );
      localStorage.setItem("items", JSON.stringify(items));
    } else {
      setItems(JSON.parse(localItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  });

  function handleDelete(itemTask) {
    const NewArray = items.filter(item => item.task !== itemTask);
    setItems(NewArray);
  }

  return (
    <div className="body-2">
      <h1 className="page-title">To-Do List</h1>
      <div className="content-wrapper">
        <Input
          value={input}
          onChange={event => setInput(event.target.value)}
          onClick={() => {
            if (!input) {
              return;
            }
            setItems([...items, { task: input }]);
            setInput("");
          }}
        />
        <TaskList handleDelete={handleDelete} items={items} />
      </div>
    </div>
  );
}

export default App;
