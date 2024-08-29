let nextTodoId = 0;

export const addTodo = (text, user, date) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text,
  user,
  date,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});
