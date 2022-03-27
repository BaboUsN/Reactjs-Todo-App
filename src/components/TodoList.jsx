import React from "react";
import Todo from "./Todo";
export const TodoList = ({ todos }) => {
  return (
    <>
      <div className="todo-list">
        {todos &&
          todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
      </div>
    </>
  );
};
export default TodoList;
