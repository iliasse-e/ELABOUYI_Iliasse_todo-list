import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { TaskType } from "../todo-list/todo-list";
import { Todo } from "./todo";

const mockedData: TaskType = {
  title: "Tache 1",
  description: "",
  isDone: true,
};

test("renders title content and checked checkbox", async () => {
  const todo = render(
    <BrowserRouter>
      <Todo
        titleContent={mockedData.title}
        descriptionContent={mockedData.description}
        isDoneState={mockedData.isDone}
      />
    </BrowserRouter>
  );
  const { getByTestId } = todo;
  const linkElement = screen.getByText(/Tache 1/i);
  const checkbox = getByTestId("checkbox");

  expect(linkElement).toBeInTheDocument();
  expect(checkbox).toBeChecked();
});
