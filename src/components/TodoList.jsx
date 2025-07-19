import React, { useState } from "react";

const TodoList = ({
  tasks,
  deleteTask,
  editTask,
  toggleTask,
  editTodoInput,
  handleEditChange,
  finishEditing,
  editText,
}) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? "completed" : ""}>
          <div className="tasks-tt">
            <label htmlFor="">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(index)}
              />
            </label>
            {/* <span className="text-sp">{task.text}</span> */}
            {editTodoInput === index ? (
              <input
                type="text"
                className="edit-input"
                value={editText}
                onChange={(e) => handleEditChange(index, e.target.value)}
                onBlur={finishEditing}
                onKeyDown={(e) => {
                  if (e.key === "Enter") finishEditing();
                }}
              />
            ) : (
              <span className="text-sp">{task.text}</span>
            )}

            {/* {`task.text ? "<span className="text-sp">{task.text}</span>": "<input type=text />"`} */}
          </div>
          <div className="todo-buttons">
            <button className="delete-button" onClick={() => deleteTask(index)}>
              ❌
            </button>
            <button
              className="edit-button"
              onClick={() => {
                editTask(index);
              }}
            >
              ✏️
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
