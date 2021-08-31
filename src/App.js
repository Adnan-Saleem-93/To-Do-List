import React, {useState, useEffect} from "react";
import {Alert} from "react-bootstrap";
import "./App.css";
import InputSection from "./components/input-section";
import ToDoList from "./components/todo-list";

function App() {
  // #region Hooks
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [edit, setEdit] = useState({flag: false, task: {}});
  const [alert, setAlert] = useState({show: false, message: ""});

  useEffect(() => {
    setTimeout(() => {
      setAlert({...alert, show: false, message: ""});
    }, 5000);
  }, [alert]);
  //#endregion

  // #region methods
  const handleSubmit = (item) => {
    let newList = [...taskList];
    if (edit.flag) {
      let itemToUpdate = newList.find((task) => task.id === edit.task.id);
      itemToUpdate.description = task;
      setAlert({...alert, show: true, message: "Item Updated"});
    } else {
      newList.push({id: newList.length + 1, description: item, isDone: false});
      setAlert({...alert, show: true, message: "New Item Added"});
    }
    setTaskList(newList);
    setEdit({...edit, flag: false, task: {}});
  };

  const handleChange = (task) => {
    setTask(task);
  };

  const handleEdit = (index) => {
    let itemToEdit = taskList.find((task, idx) => idx === index);
    setTask(itemToEdit.description);
    setEdit({...edit, flag: true, task: itemToEdit});
  };
  const handleDelete = (index) => {
    let filteredList = taskList.filter((item, idx) => idx !== index);
    setTaskList(filteredList);
    setAlert({...alert, show: true, message: "Item Removed"});
  };
  const handleCheck = (index) => {
    let newList = [...taskList];
    newList[index].isDone = !newList[index].isDone;
    setTaskList(newList);
    setAlert({
      ...alert,
      show: true,
      message: `Task ${newList[index].isDone ? "Completed" : "Set as Incomplete"}`
    });
  };
  const handleClearAll = () => {
    setTaskList([]);
    setAlert({...alert, show: true, message: "List Cleared"});
  };

  //#endregion

  return (
    <>
      {alert.show && <Alert variant="danger">{alert.message}</Alert>}
      <section className="App">
        <article className="header">
          <h3>To Do List</h3>
        </article>
        <InputSection
          onSubmit={handleSubmit}
          value={task}
          onHandleChange={handleChange}
          editTask={edit.flag}
        />
        <ToDoList
          tasks={taskList}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onCheck={handleCheck}
          onClearAll={handleClearAll}
        />
      </section>
    </>
  );
}

export default App;
