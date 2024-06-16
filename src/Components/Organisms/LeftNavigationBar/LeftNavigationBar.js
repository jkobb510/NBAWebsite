import React from "react";
import "./LeftNavigationBar.css"; // Assuming this is your CSS file
import { Link } from "react-router-dom";

const LeftNavigationBar = () => {
  return (
    <div className="left-nav">
      <ul>
        <li>
          <Link to="/home" className="active">Home</Link>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Players</a>
        </li>
        <li>
          <a href="#clients">Teams</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default LeftNavigationBar;
