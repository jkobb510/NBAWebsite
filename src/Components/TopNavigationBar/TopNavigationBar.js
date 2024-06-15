import React from "react";
import { Link } from "react-router-dom";
import "./TopNavigationBar.css";
import ImageComponent from "../Logo/Logo";

const TopNavigationBar = () => {
  return (
    <div className="topnav">
      <ImageComponent />
      <Link to="/logout">Log Out</Link>
      <Link to="/my-account">My Account</Link>
    </div>
  );
};

export default TopNavigationBar;
