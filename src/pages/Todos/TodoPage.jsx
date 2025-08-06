import React from "react";
import AddTodos from "../../features/todo/AddTodos";
import DisplayTodos from "../../features/todo/DisplayTodos";

function TodoPage() {
  return (
    <>
      <AddTodos />
      <br />
      <hr />
      <DisplayTodos />
    </>
  );
}
export default TodoPage;
