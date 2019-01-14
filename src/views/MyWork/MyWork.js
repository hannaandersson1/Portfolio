import React, { Component } from "react";
import "./MyWork.scss";
import Cover from "../../components/Cover/Cover";
import ImagesSection from "../../components/ImageSection/ImageSection";

class MyWork extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="myWork">
        <Cover />
        <ImagesSection />
      </div>
    );
  }
}

export default MyWork;
