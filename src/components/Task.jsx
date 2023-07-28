import React from "react";
import "../styles/task.scss";
// deleteTask in a function which is defined in Home.jsx file
const Task = ({ title, description, deleteTask, index }) => {
  return (
    <div className="task">
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>
      <button
        onClick={() => {
          deleteTask(index);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Task;
