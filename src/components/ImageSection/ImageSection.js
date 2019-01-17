import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ImageSection.scss";

class ImageSection extends Component {
  state = {};
  render() {
    return (
      <div className="imageSection">
        <div className="image-left">
          <Link to="/project/exchangeSate">
            <div className="image-project-computer">
              <img id="exchange" src="./images/exchange.png" alt="exchange" />
            </div>
          </Link>
          <div className="text-project">
            <h2 className="h2-hover-project">Website for exchange studies</h2>
            <p className="p-hover-project">
              UX/UI Designer & Front End Developer
            </p>
            <p>
              I was a part of a team that designed and build a website for
              exchange studies. The aim was to encourage students to study
              abroad and to simplify the process.
            </p>
            <Link className="button-myWork" to="/project/exchangeSate">
              View project
            </Link>
          </div>
        </div>

        <div className="image-right">
          <div className="text-project">
            <h2 className="h2-hover-project">QueueU - The Democratic DJ</h2>
            <p className="p-hover-project">UX/UI Designer</p>
            <p>
              In a team, we came up with a concept and designed an application
              where people can share and listen to music together.
            </p>
            <Link className="button-myWork" to="/project/queueU">
              View project
            </Link>
          </div>
          <Link to="/project/queueU">
            <div className="image-project-phone">
              <img id="qu" src="./images/qu.png" alt="project-queueU" />
            </div>
          </Link>
        </div>

        <div className="image-left">
          <Link to="/project/accuratePlayer">
            <div className="image-project-computer">
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
            <p>
              I did the preparation work to a website for the product Accurate
              player. The work consisted of, researching, sketching, testing and
              developing.
            </p>
            <Link className="button-myWork" to="/project/accuratePlayer">
              View project
            </Link>
          </div>
        </div>

        <div className="image-right">
          <div className="text-project">
            <h2 className="h2-hover-project">
              MASH - Course reviewing application
            </h2>
            <p className="p-hover-project">
              UX/UI Designer, Frontend Developer
            </p>
            <p>
              Me and three other students come up with an idea of an application
              where people can write reviews about courses at the University.
            </p>
            <Link className="button-myWork" to="/project/mash">
              View project
            </Link>
          </div>
          <Link to="/project/mash">
            <div className="image-project-phone">
              <img id="mash" src="./images/mash1.png" alt="project-mash" />
            </div>
          </Link>
        </div>

        <div className="image-left">
          <Link to="/project/accuratePlayer">
            <div className="image-project-phone">
              <img
                id="hikikomori"
                src="./images/hikikomori.png"
                alt="hikikomori"
              />
            </div>
          </Link>
          <div className="text-project">
            <h2 className="h2-hover-project">
              Hikikomori - Calendar application
            </h2>
            <p className="p-hover-project">UX/UI Designer</p>
            <p>
              A project where a team came up with a solution that would
              structure the daily life for young adults who withdraw from social
              life.
            </p>
            <Link className="button-myWork" to="/project/hikikomori">
              View project
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageSection;
