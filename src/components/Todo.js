import React from "react";
import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import { v1 as uuid } from "uuid";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "Acheter du lait" },
    { id: 2, todo: "Acheter du pain" },
    { id: 3, todo: "Acheter du fromage" },
  ]);

  const [warning, setWarning] = useState(false);
  const [todoToModify, setTodoToModify] = useState("");

  // Ajouter un Todo
  const addNewTodo = (newTodo) => {
    if (newTodo !== "") {
      warning && setWarning(false);
      setTodos([...todos, { id: uuid(), todo: newTodo }]);
    } else {
      setWarning(true);
    }
  };

  const deleteTodo = (todoId) => {
    const remainTodos = todos.filter((t) => t.id !== todoId);
    setTodos(remainTodos);
  };

  const getTodo = (todoId) => {
    const todotomodify = todos.find((t) => t.id === todoId);
    setTodoToModify(todotomodify);
  };

  const warningMsg = warning && (
    <div className="alert alert-danger" role="alert">
      Veuillez indiquer un Todo
    </div>
  );

  // Affichage de la liste
  const myTodos = todos.map((t) => {
    return (
      <li className="list-group-item d-flex justify-content-between" key={t.id}>
        {t.todo}
        <div>
          <input
            className="btn btn-primary me-4"
            type="button"
            value="Modifier"
            onClick={() => getTodo(t.id, todos)}
          />
          <input
            className="btn btn-danger"
            type="button"
            value="Supprimer"
            onClick={() => deleteTodo(t.id)}
          />
        </div>
      </li>
    );
  });

  return (
    <div>
      {warningMsg}
      <h1 className="text-center">{todos.length} To-Do</h1>
      <ul className="list-group">{myTodos}</ul>
      <AddTodoForm addNewTodo={addNewTodo} todoToModify={todoToModify}/>
    </div>
  );
};

export default Todo;
