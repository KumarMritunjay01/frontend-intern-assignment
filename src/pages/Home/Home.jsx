import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.css";

function Home() {
  return (
    <div className="container">
      <div>
        <Link className="home" to="/">
          Home
        </Link>
      </div>
      <div>
        <Link className="todo" to="/todo">
          To-Do
        </Link>
        <Link className="github" to="/github">
          GitHub
        </Link>
      </div>
    </div>
  );
}
export default Home;
