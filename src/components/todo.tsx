import React, { useState } from "react";

interface TodoType {
  titleContent: string;
  descriptionContent: string;
  isDoneState: boolean;
}

export const Todo: React.FC<TodoType> = ({
  titleContent,
  descriptionContent,
  isDoneState,
}): JSX.Element => {
  const [title, setTitle] = useState<string>(titleContent);
  const [isDone, setIsDone] = useState<boolean>(isDoneState);
  const [description, setDescription] = useState<string>(descriptionContent);

  console.log(isDone);

  const handleDescription = (newDescription: string): void => {
    setDescription(newDescription);
  };

  const handleTitle = (newTitle: string): void => {
    setTitle(newTitle);
  };

  const checkHandler = (): void => {
    setIsDone((value) => !value);
  };

  return (
    <div
      className="todo-list__element"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <h3 style={{ width: "250px"}}>{title}</h3>
      {isDone ? (
        <input
          onChange={checkHandler}
          type="checkbox"
          id="task"
          name="task"
          checked
          className="checkbox checked"
        ></input>
      ) : (
        <input
          onChange={checkHandler}
          type="checkbox"
          id="task"
          name="task"
          className="checkbox unchecked"
        ></input>
      )}
      <p>{isDone.toString()}</p>
    </div>
  );
};
