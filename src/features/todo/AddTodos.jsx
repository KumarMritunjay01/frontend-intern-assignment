import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "./todoSlice";
import Home from "../../pages/Home/Home";
import "../../styles/AddTodos.css";

function AddTodos({ onClick }) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const saveTaskHandler = () => {
    const trimmedInput = input.trim();
    if (trimmedInput !== "") {
      const newTask = {
        id: Date.now(),
        title: trimmedInput,
      };
      dispatch(addTodos(newTask));
      setInput("");
    }
  };

  return (
    <>
      <Home />
      <div className="add-todos-container">
        <input
          type="text"
          placeholder="Enter task..."
          required
          value={input}
          onChange={inputHandler}
        />
        <button onClick={saveTaskHandler}>Save Task</button>
      </div>
    </>
  );
}

export default AddTodos;
