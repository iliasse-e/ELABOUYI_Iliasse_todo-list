import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./todo.css";

interface TodoType {
  titleContent: string;
  descriptionContent: string;
  isDoneState: boolean;
  action?: any;
}

export const Todo: React.FC<TodoType> = ({
  titleContent,
  descriptionContent,
  isDoneState,
  action,
}): JSX.Element => {
  return (
    <div className="todo-list__element">
      <Link
        to={"/" + titleContent.split(" ").join("-").toLowerCase()}
        target="_blank"
        rel="noreferrer"
        state={{
          title: titleContent,
          description: descriptionContent,
          isDone: isDoneState,
        }}
      >
        <p className="todo-list__element-title">{titleContent}</p>
      </Link>
      <input
        onChange={(e) => {
          e.preventDefault;
          action(titleContent);
        }}
        type="checkbox"
        checked={isDoneState}
        id="task"
        name="task"
        className="checkbox todo-list__element-checkbox"
        data-testid="checkbox"
      ></input>
    </div>
  );
};
