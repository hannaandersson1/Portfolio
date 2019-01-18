import React, { Component } from "react";
import "./Project.scss";
import { getCoverContent } from "../../Content/getProjectContent";
import ProjectCover from "../../components/ProjectCover/ProjectCover";
import Process from "../../components/Process/Process";
import { Link, animateScroll as scroll } from "react-scroll";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
  }

  componentDidMount = () => {
    scroll.scrollToTop({
      duration: 0
    });

    const content = getCoverContent(this.props.match.params.id);
    if (!content.processInfo) {
      this.setState({
        visibility: true
      });
    }
  };

  toggleVisibility = () => {
    this.setState({
      visibility: !this.state.visibility
    });
  };

  render() {
    const content = getCoverContent(this.props.match.params.id);
    return (
      <div className="project">
        <ProjectCover color={content.cover.color} img={content.cover.img} />
        {content.intro}
        {content.process && (
          <div className="processen">
            <h2>Process</h2>
            <div className="process">
              {content.processes.map((element, index) => {
                return <Process key={index} steps={element.steps} />;
              })}
            </div>
          </div>
        )}

        {this.state.visibility && content.text}
        {content.processInfo && (
          <Link
            id="btn-toggle-process"
            smooth={true}
            duration={500}
            to="btn-toggle-process"
            onClick={this.toggleVisibility}
          >
            {(!this.state.visibility ? "Show" : "Hide") + " process"}
          </Link>
        )}
      </div>
    );
  }
}

export default Project;
