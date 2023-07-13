import React, { useState } from "react";

function ToDoItmes(props) {
  const [isDone, setIsDone] = useState(false);

  function handelClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handelClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItmes;
