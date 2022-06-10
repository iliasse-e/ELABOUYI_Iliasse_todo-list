import { sortTodos } from "./sort";

const toSortData = [
  {
    title: "A",
    description: "",
    isDone: false,
  },
  {
    title: "B",
    description: "",
    isDone: false,
  },
  {
    title: "C",
    description: "",
    isDone: false,
  },
];

const sortedData = [
  {
    title: "B",
    description: "",
    isDone: false,
  },
  {
    title: "C",
    description: "",
    isDone: false,
  },
  {
    title: "A",
    description: "",
    isDone: true,
  },
];

const toggleTask = {
  title: "A",
  description: "",
  isDone: true,
};

it("should sorts isDone elements first", () => {
  expect(sortTodos(toSortData, toggleTask)).toEqual(sortedData);
});
