import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="myWork-header">
        <h1>Hi, I’m Hanna.</h1>
        <h2>
          I'm a UX Designer and a Front End Developer based in Stockholm,
          Sweden.
        </h2>
      </header>
    );
  }
}

export default Header;
