import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = () => {
  const [text, setText] = useState("");
  const [user, setUser] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || !user.trim() || !date.trim()) return;
    dispatch(addTodo(text, user, date));
    setText("");
    setUser("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Usuario"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Añadir Tarea</button>
    </form>
  );
};

export default AddTodo;
