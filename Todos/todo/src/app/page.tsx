"use client";

import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, nom: "Abricot", checked: true },
    { id: 2, nom: "Banane", checked: true },
    { id: 3, nom: "Cerise", checked: false },
  ]);
  const [inputTodo, setInputTodo] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleDelete = (id) => {
    console.log("delete");
    const nouveauTodo = [...todos];
    const nouveauTodoUpdated = nouveauTodo.filter((todo) => todo.id !== id);
    setTodos(nouveauTodoUpdated);
  };

  const handleChangeInput = (e) => {
    setInputTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nouveauTodo = [...todos];
    const id = new Date().getTime();
    const nom = inputTodo;

    nouveauTodo.push({ id: id, nom: nom, checked: false });
    setTodos(nouveauTodo);
    setInputTodo("");
  };

  const handleToggleCheck = (id) => {
    const nouveauTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(nouveauTodo);
  };

  return (
    <>
      <h1>Liste des todos</h1>
      <ul>
        {todos.map((todo) => (
          <>
            <li key={todo.id}>
              {todo.nom}{" "}
              <button
                onClick={() => {
                  handleDelete(todo.id);
                }}
              >
                X
              </button>
              <input
                type="checkbox"
                checked={todo.checked}
                onClick={() => {
                  handleToggleCheck(todo.id);
                }}
              />
            </li>
          </>
        ))}
      </ul>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChangeInput} value={inputTodo} />
        <button>Add</button>
      </form>
    </>
  );
};

export default Todo;
