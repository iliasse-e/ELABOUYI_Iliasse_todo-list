import React from "react";
import { render, screen } from "@testing-library/react";
import { TaskType, TodoList } from "./todo-list";
import { initData } from "../../mocks/init-data";
import { BrowserRouter } from "react-router-dom";

const mockedData: TaskType[] = initData;

test("rendering todo data to screen", () => {
  render(
    <BrowserRouter>
      <TodoList todos={mockedData} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Café/i);
  expect(linkElement).toBeInTheDocument();
});
