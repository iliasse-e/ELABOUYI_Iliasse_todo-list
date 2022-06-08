import React from "react";
import { useParams } from "react-router-dom";
import { initData } from "../data/init-data";

export const DetailTodo = () => {
  const location = useParams();
  const [task] = initData.filter(
    (todo) => todo.title.split(" ").join("-").toLowerCase() === location.id
  );

  console.log(location);
  return (
    <main>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </main>
  );
};
