import React from "react";

function ToDoItem({ task, handleDelete }) {
  return (
    <div className="to-do-item">
      <h1 className="to-do-title">{task}</h1>
      <a
        href="#"
        className="button done w-button"
        onClick={() => handleDelete(task)}
      >
        ✔
      </a>
    </div>
  );
}

export default ToDoItem;
