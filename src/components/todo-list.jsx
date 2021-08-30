import React from "react";
import "../css/todo-list.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faEdit, faTimes, faTrash} from "@fortawesome/free-solid-svg-icons";

const ToDoList = ({tasks, onEdit, onDelete}) => {
  return (
    <article className="tasks">
      {tasks.length <= 0 ? (
        <h3>No tasks yet</h3>
      ) : (
        tasks.map(({id, description, isDone}, index) => {
          return (
            <div key={index} className="single-task">
              <span className="description">
                <FontAwesomeIcon
                  icon={isDone ? faTimes : faCheck}
                  title={isDone ? "Mark Pending" : "Mark Done"}
                />
                <span style={{textDecoration: isDone ? "line-through" : "none"}}>
                  {description}
                </span>
              </span>
              <span className="actions">
                <FontAwesomeIcon icon={faEdit} title="Edit Task" onClick={() => onEdit(index)} />
                <FontAwesomeIcon
                  icon={faTrash}
                  title="Delete Task"
                  onClick={() => onDelete(index)}
                />
              </span>
            </div>
          );
        })
      )}
    </article>
  );
};

export default ToDoList;
