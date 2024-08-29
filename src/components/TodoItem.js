import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../actions";

const TodoItem = ({ id, text, user, date, completed }) => {
  const dispatch = useDispatch();

  return (
    <li
      onClick={() => dispatch(toggleTodo(id))}
      className={completed ? "completed" : ""}
    >
      {text} - {user} - {date}
    </li>
  );
};

export default TodoItem;
