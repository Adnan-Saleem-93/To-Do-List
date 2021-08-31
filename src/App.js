import React, {useState} from "react";
import "./App.css";
import InputSection from "./components/input-section";
import ToDoList from "./components/todo-list";

function App() {
  // #region useState Hooks
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [edit, setEdit] = useState({flag: false, task: {}});
  //#endregion

  // #region methods
  const handleSubmit = (item) => {
    let newList = [...taskList];
    if (edit.flag) {
      let itemToUpdate = newList.find((task) => task.id === edit.task.id);
      itemToUpdate.description = task;
    } else {
      newList.push({id: newList.length + 1, description: item, isDone: false});
    }
    setTaskList(newList);
    setEdit({...edit, flag: false, task: {}});
  };

  const handleChange = (task) => {
    setTask(task);
  };

  const handleEdit = (index) => {
    let item = taskList.find((task, idx) => idx === index);
    setTask(item.description);
    setEdit({...edit, flag: true, task: item});
  };
  const handleDelete = (index) => {
    let filteredList = taskList.filter((item, idx) => idx !== index);
    setTaskList(filteredList);
  };
  const handleCheck = (index) => {
    let newList = [...taskList];
    newList[index].isDone = !newList[index].isDone;
    setTaskList(newList);
  };
  //#endregion

  return (
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
      />
    </section>
  );
}

export default App;
