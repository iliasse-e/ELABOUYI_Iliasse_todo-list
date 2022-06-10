import React from "react";
import { render, screen } from "@testing-library/react";
import { initData } from "../../mocks/init-data";
import { BrowserRouter } from "react-router-dom";
import { TaskType, TodoList } from "../todo-list/todo-list";

const mockedData: TaskType[] = initData;

beforeAll(() => {
  window.history.pushState({}, "Title", "/café");
});

test("renders data title in page", () => {
  render(
    <BrowserRouter>
      <TodoList todos={mockedData} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Café/i);
  expect(linkElement).toBeInTheDocument();
});
