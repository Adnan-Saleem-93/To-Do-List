import React, {useState} from "react";
import "./App.css";
import InputSection from "./components/input-section";
import ToDoList from "./components/todo-list";

function App() {
  const [taskList, setTaskList] = useState([]);
  const handleSubmit = (item) => {
    let newList = [...taskList];
    newList.push({id: newList.length + 1, description: item, isDone: false});
    setTaskList(newList);
  };

  return (
    <section className="App">
      <article>
        <h3>To Do List</h3>
      </article>
      <InputSection onSubmit={handleSubmit} />
      <ToDoList tasks={taskList} />
    </section>
  );
}

export default App;
