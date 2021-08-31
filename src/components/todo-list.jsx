import React from "react";
import "../css/todo-list.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FormCheck} from "react-bootstrap";

const ToDoList = ({tasks, onEdit, onDelete, onCheck}) => {
  return (
    <article className="tasks">
      {tasks.length <= 0 ? (
        <h3>No tasks</h3>
      ) : (
        tasks.map(({id, description, isDone}, index) => {
          return (
            <div key={index} className="single-task">
              {/* checkbox and task description */}
              <span className="description">
                <FormCheck
                  aria-label={`task ${index}`}
                  inline="true"
                  title={isDone ? "Mark Incomplete" : "Mark Done"}
                  onClick={() => onCheck(index)}
                />
                <span style={{textDecoration: isDone ? "line-through" : "none"}}>
                  {description}
                </span>
              </span>
              {/* task actions */}
              <span className="actions">
                {/* edit button */}
                <FontAwesomeIcon icon={faEdit} title="Edit Task" onClick={() => onEdit(index)} />
                {/* delete button */}
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
      {tasks.length > 0 && (
        <div className="clear-all-div">
          <span className="btn-clearAll">Clear Items</span>
        </div>
      )}
    </article>
  );
};

export default ToDoList;
