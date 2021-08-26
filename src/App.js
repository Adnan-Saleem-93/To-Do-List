import React from "react";
import "./App.css";
import InputSection from "./components/input-section";
import ToDoList from "./components/todo-list";

function App() {
  return (
    <section className="App">
      <article>
        <h3>To Do List</h3>
      </article>
      <InputSection />
      <ToDoList />
    </section>
  );
}

export default App;
