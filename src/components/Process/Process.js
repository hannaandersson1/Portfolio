import React from "react";
import "./Process.scss";

const Process = ({ steps }) => {
  return (
    <div className="process-step">
      <h4 className="p-bold">{steps.processHead}</h4>
      {steps.list.map((element, index) => {
        return (
          <p key={index} className="p-steps">
            {element}
          </p>
        );
      })}
    </div>
  );
};

export default Process;
