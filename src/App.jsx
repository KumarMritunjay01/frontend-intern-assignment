import React from "react";
import Home from "./pages/Home/Home";
import TodoPage from "./pages/Todos/TodoPage";
import GitHubSearchPage from "./features/github/GitHubSearchPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/github" element={<GitHubSearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
