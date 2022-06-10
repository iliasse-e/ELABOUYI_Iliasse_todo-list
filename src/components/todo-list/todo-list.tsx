import React, { useEffect, useReducer, useState } from "react";
import { sortTodos } from "../../service/sort";
import { Todo } from "../todo/todo";
import "./todo-list.css";
import axios from "axios";

export interface TaskType {
  title: string;
  description: string;
  isDone: boolean;
}

export const TodoList: React.FC<{ todos: TaskType[] }> = ({
  todos,
}): JSX.Element => {
  const [tasks, setTasks] = useState<TaskType[]>(todos);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [NewTaskDescription, setNewTaskDescription] = useState("");
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const toggleState = (title: string): void => {
    const hasCurrentTitle = (element: TaskType) => element.title === title;
    const taskIndex: number = tasks.findIndex(hasCurrentTitle);
    const currentTask: TaskType = tasks[taskIndex];
    currentTask.isDone = !currentTask.isDone;
    axios
      .post(`api/postTodos`, JSON.stringify(sortTodos(tasks, currentTask)))
      .then((res) => setTasks(res.data));
    forceUpdate();
  };

  const newTask = (newTitle: string, newDescription: string): void => {
    axios
      .post(
        `api/postTodos`,
        JSON.stringify([
          {
            title: newTitle,
            description: newDescription,
            isDone: false,
          },
          ...tasks,
        ])
      )
      .then((res) => setTasks(res.data));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    newTask(newTaskTitle, NewTaskDescription);
    e.target.reset();
    blur();
  };

  return (
    <div className="toto-list" style={{ width: "50%", margin: "auto" }}>
      <h1>My todo list</h1>
      <section>
        {tasks.map((task: TaskType) => {
          return (
            <Todo
              key={task.title}
              titleContent={task.title}
              descriptionContent={task.description}
              isDoneState={task.isDone}
              action={toggleState}
            />
          );
        })}
      </section>
      <section className="add-todo">
        <h4 className="add-todo-title">New task</h4>
        <form className="add-todo-form" onSubmit={handleSubmit}>
          Title :
          <input
            type="text"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.preventDefault;
              setNewTaskTitle(e.target.value);
            }}
          />
          Description :
          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.preventDefault;
              setNewTaskDescription(e.target.value);
            }}
          />
          <input type="submit" />
        </form>
      </section>
    </div>
  );
};
