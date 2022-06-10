import React from "react";
import { Navigate, useParams } from "react-router-dom";
import "./detail-todo.css";
import { TaskType } from "../todo-list/todo-list";

export const DetailTodo: React.FC<{ todos: TaskType[] }> = ({ todos }) => {
  const location = useParams();
  const [task] = todos.filter(
    (todo) => todo.title.split(" ").join("-").toLowerCase() === location.id
  );

  if (task === undefined) return Navigate({ to: "not-found" });
  return (
    <main className="detail-todo">
      <h3 className="detail-todo-title">{task.title}</h3>
      <p className="detail-todo-description">{task.description}</p>
    </main>
  );
};
