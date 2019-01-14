import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navigation">
      <NavLink className="p-navigation" exact to="/">
        HANNA ANDERSSON
      </NavLink>
      <div className="link-container">
        <NavLink exact className="nav-link" to="/">
          WORK
        </NavLink>
        <NavLink className="nav-link" to="/About">
          ME
        </NavLink>
        <NavLink className="nav-link" to="/Resume">
          RESUME
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
