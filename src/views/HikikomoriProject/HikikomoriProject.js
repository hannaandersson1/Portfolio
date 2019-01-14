import React, { Component } from "react";
import "./HikikomoriProject.scss";
import ProjectCover from "../../components/ProjectCover/ProjectCover";

class HikikomoriProject extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <ProjectCover color="#88c641" img="./images/ism.png" />
          <div className="intro-section">
            <div className="intro-section-left">
              <h1 className="h1-project">Hikikomori - Project Lotus</h1>
              <h2 className="h2-project">
                Nov 2016 - Dec 2016 | Umeå, Sweden{" "}
              </h2>
              <p>
                Hikikomori is an organization that helps adolescents that is
                isolated in their homes to get back to society.
                <br />
                <br /> During a school project, me and three other students came
                up with an idea of ​​a smart bracelet connected to a calendar
                application. The calender would have sent personal notifications
                and motivating messages to the users and aimed to help the
                adolescents get structure in their daily life and to gain
                self-esteem. During the project we had Madeleine Blusi, PhD in
                eHealth as a metor and got a lot of interesting insigt in how we
                could work with design to evoke desirable emotions.<br />
                <br /> My role was to work with UX/UI design.
              </p>
            </div>
            <div className="intro-section-right line-left">
              <p className="p-project">Context</p>
              <p className="p-bold">School project</p>
              <p className="p-project">Client</p>
              <p className="p-bold">Hikikomori</p>
              <p className="p-project">Role</p>
              <p className="p-bold">UX/UI Designer</p>
              <p className="p-project">Tools/Technology</p>
              <p className="p-bold">Sketch, Illustrator, Principle</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HikikomoriProject;
