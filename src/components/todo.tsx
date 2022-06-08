import React, { useState } from "react";
import { Link } from "react-router-dom";

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
  const [title, setTitle] = useState<string>(titleContent);
  const [isDone, setIsDone] = useState<boolean>(isDoneState);
  const [description, setDescription] = useState<string>(descriptionContent);

  return (
    <div
      className="todo-list__element"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Link
        to={"task/" + titleContent.split(" ").join("-").toLowerCase()}
        target="_blank"
        rel="noreferrer"
        state={{
          title: titleContent,
          description: descriptionContent,
          isDone: isDoneState,
        }}
        style={{ width: "250px" }}
      >
        {titleContent}
      </Link>
      <input
        onChange={(e) => {
          e.preventDefault;
          action(titleContent);
        }}
        type="checkbox"
        id="task"
        name="task"
        className="checkbox unchecked"
      ></input>
      <p>{isDoneState.toString()}</p>
    </div>
  );
};
