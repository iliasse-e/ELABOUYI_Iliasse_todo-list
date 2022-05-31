import React, { useState } from "react";

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
      <h3 style={{ width: "250px" }}>{titleContent}</h3>
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
