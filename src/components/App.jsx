import React, { useState } from "react";
import ToDoItmes from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItmes] = useState([]);

  function handleChane(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItmes() {
    setItmes((prevItmes) => {
      return [...prevItmes, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChane} type="text" value={inputText} />
        <button onClick={addItmes}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <ToDoItmes text={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
