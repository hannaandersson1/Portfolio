import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="Navigation">
        <ul>
          <li>
            <Link to="/">WORK</Link>
          </li>
          <li>
            <Link to="/About">ME</Link>
          </li>
          <li>
            <Link to="/Resume">RESUME</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
