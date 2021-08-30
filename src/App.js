import React, {useState} from "react";
import "./App.css";
import InputSection from "./components/input-section";
import ToDoList from "./components/todo-list";

function App() {
  // #region useState Hooks
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  //#endregion

  // #region methods
  const handleSubmit = (item) => {
    let newList = [...taskList];
    newList.push({id: newList.length + 1, description: item, isDone: true});
    setTaskList(newList);
  };

  const handleChange = (task) => {
    setTask(task);
  };

  const handleEdit = (index) => {
    console.log(index);
  };
  const handleDelete = (index) => {
    console.log(index);
  };

  //#endregion

  return (
    <section className="App">
      <article className="header">
        <h3>To Do List</h3>
      </article>
      <InputSection onSubmit={handleSubmit} value={task} onHandleChange={handleChange} />
      <ToDoList tasks={taskList} onEdit={handleEdit} onDelete={handleDelete} />
    </section>
  );
}

export default App;
