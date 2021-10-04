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

  const addNewTodo = (newTodo) => {
    if (newTodo !== "") {
      warning && setWarning(false);
      setTodos([...todos, { id: uuid(), todo: newTodo }]);
    } else {
      setWarning(true);
    }
  };

  const warningMsg = warning && (
    <div className="alert alert-danger" role="alert">
      Veuillez indiquer un Todo
    </div>
  );

  const myTodos = todos.map((todo) => {
    return (
      <li className="list-group-item" key={todo.id}>
        {todo.todo}
      </li>
    );
  });

  return (
    <div>
      {warningMsg}
      <h1 className="text-center">{todos.length} To-Do</h1>
      <ul className="list-group">{myTodos}</ul>
      <AddTodoForm addNewTodo={addNewTodo} />
    </div>
  );
};

export default Todo;
