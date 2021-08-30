import React, {useState} from "react";
import "../css/input-section.css";
import {FormControl, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons";

const InputSection = ({onSubmit}) => {
  const [task, setTask] = useState("");
  const [showError, setShowError] = useState(false);
  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const handleSubmit = () => {
    if (task.trim() !== "") {
      onSubmit(task);
      setShowError(false);
      setTask("");
    } else {
      setShowError(true);
    }
  };

  return (
    <article>
      <div id="input-area">
        <FormControl
          placeholder="Enter item, e.g., Gym"
          aria-label="todoItem"
          aria-describedby="basic-todoItem"
          id="input"
          autoFocus={true}
          onChange={handleChange}
          value={task}
        />
        {showError && (
          <p id="input-error">
            <span>
              <FontAwesomeIcon icon={faExclamationCircle} style={{marginRight: "1vw"}} />
            </span>
            Please enter a valid value
          </p>
        )}
      </div>
      <Button variant="info" id="btn-submit" onClick={handleSubmit}>
        Submit
      </Button>
    </article>
  );
};

export default InputSection;
