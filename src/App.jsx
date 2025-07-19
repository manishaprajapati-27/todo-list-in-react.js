import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="wrap">
      <div className="container">
        <h1>To-Do List</h1>
        <TodoForm />
        {/* <TodoList /> */}
      </div>
    </div>
  );
}

export default App;
