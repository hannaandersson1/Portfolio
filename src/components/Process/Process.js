import React, { Component } from "react";
import "./Process.scss";

class Process extends Component {
  render() {
    return (
      <div className="process-step">
        <h4 className="p-bold">{this.props.steps.processHead}</h4>
        {this.props.steps.list.map((element, index) => {
          return (
            <p key={index} className="p-steps">
              {element}
            </p>
          );
        })}
      </div>
    );
  }
}

export default Process;
