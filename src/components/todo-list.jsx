import React from "react";
import "../css/todo-list.css";

const ToDoList = ({tasks}) => {
  console.log(tasks);
  return tasks.length <= 0 ? (
    <h3>No tasks yet</h3>
  ) : (
    tasks.map((item, index) => {
      return <article key={index}></article>;
    })
  );
};

export default ToDoList;
