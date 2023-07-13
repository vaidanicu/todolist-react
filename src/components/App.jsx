import React, { useState } from "react";
import ToDoItme from "./ToDoItem";

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

  function deleteItems(id) {
    console.log("itmes called delete.");
    setItmes((prevItmes) => {
      return prevItmes.filter((itme, index) => {
        return index !== id;
      });
    });
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
          {items.map((item, index) => (
            <ToDoItme
              key={index}
              id={index}
              text={item}
              onChecked={deleteItems}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
