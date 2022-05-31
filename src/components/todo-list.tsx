import React, { useEffect, useReducer, useState } from "react";
import { sortTodos } from "../service/sort";
import { initData } from "./init-data";
import { Todo } from "./todo";

export interface TaskType {
  title: string;
  description: string;
  isDone: boolean;
}

export const TodoList = (): JSX.Element => {
  const [tasks, setTasks] = useState<TaskType[]>(initData);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [NewTaskDescription, setNewTaskDescription] = useState("");
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleState = (title: string) => {
    const hasCurrentTitle = (element: TaskType) => element.title === title;
    const taskIndex: number = tasks.findIndex(hasCurrentTitle);
    const currentTask: TaskType = tasks[taskIndex];
    currentTask.isDone = !currentTask.isDone;
    setTasks(sortTodos(tasks, currentTask));
    forceUpdate();
  };

  const newTask = (newTitle: string, newDescription: string) => {
    setTasks([
      {
        title: newTitle,
        description: newDescription,
        isDone: false,
      },
      ...tasks,
    ]);
  };

  return (
    <div className="toto-list" style={{ width: "50%", margin: "auto" }}>
      <h1>My todo list</h1>
      <section>
        {tasks.map((task) => {
          return (
            <Todo
              key={task.title}
              titleContent={task.title}
              descriptionContent={task.description}
              isDoneState={task.isDone}
              action={handleState}
            />
          );
        })}
      </section>
      <p>Task state : {tasks.length.toString()}</p>
      <section className="add-todo">
        <h4>New task</h4>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            newTask(newTaskTitle, NewTaskDescription);
          }}
        >
          Title :
          <input
            type="text"
            required
            onChange={(e) => {
              setNewTaskTitle(e.target.value);
              e.preventDefault;
            }}
          />
          Description :
          <input
            type="text"
            onChange={(e) => {
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
