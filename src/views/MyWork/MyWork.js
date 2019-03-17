import React, { Component } from "react";
import "./MyWork.scss";
import Cover from "../../components/Cover/Cover";
import ImagesSection from "../../components/ImageSection/ImageSection";
import { animateScroll as scroll } from "react-scroll";

class MyWork extends Component {
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
      <div className="myWork">
        <Cover />
        <ImagesSection />
      </div>
    );
  }
}
export default MyWork;
