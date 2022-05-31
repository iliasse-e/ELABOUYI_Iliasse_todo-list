import React, { useEffect, useState } from "react";
import { initData } from "./init-data";
import { Todo } from "./todo";

export interface TodoType {
  title: string;
  description: string;
  isDone: boolean;
}

export const TodoList = (): JSX.Element => {
  const [tasks, setTasks] = useState<TodoType[]>(initData);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [NewTaskDescription, setNewTaskDescription] = useState("");

  const newTask = (newTitle: string, newDescription: string) => {
    setTasks([
      ...tasks,
      {
        title: newTitle,
        description: newDescription,
        isDone: false,
      },
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
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          Description :
          <input
            value={""}
            type="text"
            onChange={(e) => setNewTaskDescription(e.target.value)}
          />
          <input type="submit" />
        </form>
      </section>
    </div>
  );
};
