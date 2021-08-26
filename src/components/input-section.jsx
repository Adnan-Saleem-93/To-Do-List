import React from "react";
import "../css/input-section.css";
import {FormControl, Button} from "react-bootstrap";

const InputSection = () => {
  return (
    <article>
      <FormControl
        placeholder="Enter item, e.g., Gym"
        aria-label="todoItem"
        aria-describedby="basic-todoItem"
        id="input"
        autoFocus={true}
      />
      <Button variant="info" id="btn-submit">
        Submit
      </Button>
    </article>
  );
};

export default InputSection;
