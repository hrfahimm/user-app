import React from "react";
import { Link } from "react-router-dom";
import "./all.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/users/add">Add User</Link>
      </nav>
      <hr className="hr"></hr>
    </div>
  );
};

export default Header;
