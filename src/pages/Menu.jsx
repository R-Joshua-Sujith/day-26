import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.css";
const Menu = () => {
  return (
    <div className="Menu">
      <Link className="menu-item" to="/users">
        View Users
      </Link>
      <Link className="menu-item" to="/create-user">
        Create User
      </Link>
    </div>
  );
};

export default Menu;
