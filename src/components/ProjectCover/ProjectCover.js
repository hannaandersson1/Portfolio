import React from "react";
import "./ProjectCover.scss";

const ProjectCover = ({ img }) => {
  return (
    <div className="project-cover">
      <img className="cover-img" alt="CoverImage" src={img} />
    </div>
  );
};

export default ProjectCover;
