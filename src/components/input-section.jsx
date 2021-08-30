import React, {useState} from "react";
import "../css/input-section.css";
import {FormControl, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons";

const InputSection = ({onSubmit, value, onHandleChange}) => {
  // #region useState Hooks
  const [showError, setShowError] = useState(false);
  //#endregion

  // #region methods
  const handleChange = (event) => {
    onHandleChange(event.target.value);
  };

  const handleSubmit = () => {
    if (value.trim() !== "") {
      onSubmit(value);
      setShowError(false);
      onHandleChange("");
      document.getElementById("input").style.borderColor = "#ced4da";
    } else {
      setShowError(true);
      document.getElementById("input").style.borderColor = "red";
    }
  };
  //#endregion

  return (
    <article className="input">
      <div id="input-form">
        <FormControl
          placeholder="Enter item, e.g., Gym"
          aria-label="todoItem"
          aria-describedby="basic-todoItem"
          id="input"
          autoFocus={true}
          onChange={handleChange}
          value={value}
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
