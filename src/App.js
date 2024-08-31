import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => (
  <div className="container">
    <h1>Lista de Tareas de Daniela</h1>
    <h4>Usando Redux toolkit</h4>
    <h6>Día jueves 15 de agosto</h6>
    {}
    <AddTodo />
    <TodoList />
  </div>
);

export default App;
