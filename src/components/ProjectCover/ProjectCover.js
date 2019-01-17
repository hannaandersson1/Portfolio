import React, { Component } from "react";
import "./ProjectCover.scss";

class ProjectCover extends Component {
  state = {};
  render() {
    return (
      <div className="project-cover">
        <img className="cover-img" alt="CoverImage" src={this.props.img} />
      </div>
    );
  }
}

export default ProjectCover;
