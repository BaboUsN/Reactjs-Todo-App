import React, { useState } from "react";
import { useTodoLayerValue } from "./context/TodoContext";
import TodoList from "./components/TodoList";
import "./App.css";

export const App = () => {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) return;
    const newTodo = {
      id: Math.floor(Math.random() * 454641368),
      content,
      isCompleted: false,
    };
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit} className="todo-form">
          <input
            type="text"
            className="todo-input"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          <button className="todo-button">add</button>
        </form>
        {/* Todo List */}
        <TodoList todos={todos} />
      </div>
    </>
  );
};
export default App;
