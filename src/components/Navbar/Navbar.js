import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navigation">
      <nav className="navigation-container">
        <NavLink className="p-navigation" exact to="/">
          HANNA ANDERSSON
        </NavLink>
        <div className="link-container">
          <NavLink exact className="nav-link" to="/">
            Work
          </NavLink>
          <NavLink className="nav-link" to="/About">
            Me
          </NavLink>
          <NavLink className="nav-link" to="/Resume">
            Resume
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
