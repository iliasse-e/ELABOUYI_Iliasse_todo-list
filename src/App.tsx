import React, { useEffect, useState } from "react";
import "./App.css";
import { TodoList } from "./components/todo-list/todo-list";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DetailTodo } from "./components/detail-todo/detail-todo";
import { NotFound } from "./components/not-found";
import { Loader } from "./components/loader";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`api/getTodos`)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, [localStorage.getItem("todos")]);

  if (data === null) return <Loader />;

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TodoList todos={data} />} />
          <Route path="/:id" element={<DetailTodo todos={data} />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
