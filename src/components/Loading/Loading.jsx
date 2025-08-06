// src/components/Loading.jsx
import React from "react";
import "./Loading.css"; // CSS file for spinner styles

function Loading() {
  return (
    <div className="spinner-container">
      <div className="spinner" />
    </div>
  );
}

export default Loading;
