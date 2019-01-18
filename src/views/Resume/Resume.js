import React, { Component } from "react";
import "./Resume.scss";
import CV from "../../CVAnderssonHanna.pdf";
import { animateScroll as scroll } from "react-scroll";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    scroll.scrollToTop({
      duration: 0
    });
  };

  render() {
    return (
      <div className="resume">
        <p>Feel free to save and print my resume by clicking on it! </p>
        <a href={CV} target="_blank">
          <img id="CVImage" src="./images/CVImage.png" alt="CVImage" />
        </a>
      </div>
    );
  }
}

export default Resume;
