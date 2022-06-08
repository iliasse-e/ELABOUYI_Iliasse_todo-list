import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./components/todo-list";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DetailTodo } from "./components/detail-todo";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/task/:id" element={<DetailTodo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
