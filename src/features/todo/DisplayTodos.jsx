import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodos } from "./todoSlice";
import "../../styles/DisplayTodos.css";

function DisplayTodos() {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodos(id));
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button
              className="deletebtn"
              onClick={() => deleteTodoHandler(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayTodos;
