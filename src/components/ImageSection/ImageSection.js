import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ImageSection.scss";

class ImageSection extends Component {
  state = {};
  render() {
    return (
      <div className="imageSection">
        <Link to="/project/exchangeSate">
          <div className="image-project">
            <img id="exchange" src="./images/exchange.png" alt="exchange" />
          </div>
        </Link>
        <div className="text-project">
          <h2 className="h2-hover-project">Website for exchange studies</h2>
          <p className="p-hover-project">UX/UI Designer, Front End Developer</p>
        </div>
        <div className="text-project">
          <h2 className="h2-hover-project">QueueU - The Democratic DJ</h2>
          <p className="p-hover-project">UX/UI Designer</p>
        </div>
        <Link to="/project/queueU">
          <div className="image-project">
            <img id="qu" src="./images/qu.png" alt="project-queueU" />
          </div>
        </Link>
        <Link to="/project/accuratePlayer">
          <div className="image-project">
            <img
              id="ap"
              src="./images/apDator.png"
              alt="project-accuratePlayer"
            />
          </div>
        </Link>
        <div className="text-project">
          <h2 className="h2-hover-project">Consultant at Accurate Player</h2>
          <p className="p-hover-project">UX Designer, Frontend Developer</p>
        </div>
        <div className="text-project">
          <h2 className="h2-hover-project">
            MASH - Course reviewing application
          </h2>
          <p className="p-hover-project">UX/UI Designer, Frontend Developer</p>
        </div>
        <Link to="/project/mash">
          <div className="image-project">
            <img id="mash" src="./images/mash1.png" alt="project-mash" />
          </div>
        </Link>
        <Link to="/project/accuratePlayer">
          <div className="image-project">
            <img
              id="hikikomori"
              src="./images/hikikomori.png"
              alt="hikikomori"
            />
          </div>
        </Link>
        <div className="text-project">
          <h2 className="h2-hover-project">Hikikomori - Project Lotus</h2>
          <p className="p-hover-project">UX/UI Designer</p>
        </div>
      </div>
    );
  }
}

export default ImageSection;
