import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [showTotalTodo, setShowTotalTodo] = useState("0");
  const [editTodoInput, setEditTodoInput] = useState(null);
  const [editText, setEditText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // setInput("");
    const newTask = { id: Date.now(), text: input, completed: false };
    setTasks([...tasks, newTask]);
    setInput("");
    setShowTotalTodo(tasks.length + 1);
  };

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks && savedTasks.length > 0) {
      setTasks(savedTasks);
      setShowTotalTodo(savedTasks.length);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
    setShowTotalTodo(updated.length);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i != index);
    setTasks(updated);
    setShowTotalTodo(updated.length);
  };
  const editTask = (index) => {
    // const updated = [...tasks];
    // updated[index].text = newText;
    // setTasks(index);
    setEditTodoInput(index);
    setEditText(tasks[index].text);
  };

  //   Edit Tasks
  //   const handleEditTask = (index) => {

  //   };

  const handleEditChange = (index, newText) => {
    const updated = [...tasks];
    updated[index].text = newText;
    setTasks(updated);
    setEditText(newText);
    setShowTotalTodo(updated.length);
  };

  const finishEditing = () => {
    if (editTodoInput !== null && editText.trim() !== "") {
      const updated = [...tasks];
      updated[editTodoInput].text = editText.trim();
      setTasks(updated);
      setShowTotalTodo(updated.length);
    }
    setEditTodoInput(null);
    setEditText("");
  };

  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Add the task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="task-input"
          required
        />
        <div>
          <button className="button" id="add-task">
            Add task
          </button>
        </div>
      </form>
      <h5 className="total-task">Total Todos {showTotalTodo}</h5>
      <TodoList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editTask={editTask}
        editTodoInput={editTodoInput}
        handleEditChange={handleEditChange}
        finishEditing={finishEditing}
        editText={editText}
      />
    </>
  );
};

export default TodoForm;

// novel@wp
// accountaccess@outlier.ai.
