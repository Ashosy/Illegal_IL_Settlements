import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
const Button = ({ children, onClick }) => {
  return (
    <Link to="" className="btn-mobile">
      <div className="btn-container">
        <button className="btn" onClick={onClick}>
          {children}
        </button>
      </div>
    </Link>
  );
};

export default Button;
