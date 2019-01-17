import React, { Component } from "react";
import "./About.scss";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="about">
        <div className="about-container">
          <div className="intro-section-about">
            <div className="image-section-about">
              <img id="me" src="./images/me.png" alt="me" />
            </div>
            <div className="text-section-about">
              <h2>Hi I'm Hanna!</h2>
              <p>
                I´m a master student in interaction technology and design and
                I’m now at my 10th semester. I have a passion for both design
                and web development and UX is central in everything I do. I love
                tackling complex problems and to work on meaningful projects
                with inspiring and creative people.
                <br />
                <br />
                On my free time I enjoy cross country skiing and to drink and
                eat delicious food together with friends.
              </p>
            </div>
          </div>

          <div className="process-box">
            <div className="process-section-small">
              <h2>What I do/My skills</h2>
            </div>
            <div className="process-section-large">
              <p>
                <p className="p-bold-about">Web development</p>
                <p>
                  Front End Expertise, Full Stack Experience.
                  <p className="p-cursive">
                    HTML/CSS, SCSS, Javascript/jQuery, Java, C#, React, ASP.NET
                  </p>
                </p>
                <p className="p-bold-about">Design</p>
                <p>
                  UX Awareness, User Research, User Testing, Prototyping,
                  Graphic Design.
                  <p className="p-cursive">
                    Illustrator, Photoshop, Sketch, Principle, Invision
                  </p>
                </p>
                <p className="p-bold-about">Other</p>
                <p>
                  Project management, Version control, Scrum, English (fluent),
                  Swedish (native).
                </p>
              </p>
            </div>
            <div className="process-section-small">
              <h2>Education</h2>
            </div>
            <div className="process-section-large">
              <p className="p-bold-about">Umeå University</p>
              <p>M.Sc in Interaction Technology and Design, 2014-2019</p>
              <p className="p-bold-about">Nanyang technological university</p>
              <p>Exchange studies in Singapore, Autumn 2017</p>
            </div>
            <div className="process-section-small">
              <h2>Work</h2>
            </div>
            <div className="process-section-large">
              <p className="p-bold-about">Umeå University</p>
              <p>UX/UI Designer and front end developer, Autumn 2018</p>
              <p className="p-bold-about">Accurate Player/Codemill</p>
              <p>UX Designer and front end developer, summer 2018</p>
            </div>
            <div className="process-section-small">
              <h2>Volontary Work</h2>
            </div>
            <div className="process-section-large">
              <p>
                Beyond my studies, I have engaged in some voluntary projects.
                The main reason why I do this is to meet goal-oriented people
                with different backgrounds and to gain new experiences.
              </p>

              <p className="p-bold-about">Uniaden</p>
              <p>
                Uniaden is a job fair held at Umeå University campus. The fair
                has nearly 100 exhibiting companies and is the largest career
                fair for students in northern Sweden. I was a part of a team
                where the work consisted of planning, building and running the
                fair. I also was responsible for 10 company hosts. My job was to
                guide the hosts through the process and make sure that
                everything was under control.
                <br />
                <br />
                What I learn from this project is how much work it takes to run
                a job fair like this. I developed my skills to handle stress,
                take fast decisions and above all, I developed my team leader
                skills.
              </p>
              <p className="p-bold-about">Idag & Inatt</p>
              <p>
                I was a board member of Idag & Inatt. A career fair with
                accompanying banquet for students of M.Sc in interaction
                technology and design. My main responsibility was to create a
                website.
              </p>
              <p className="p-bold-about">Buddy program</p>
              <p>
                During one semester I participated as a so-called "Buddy" at the
                International office in Umeå. What a buddy does, is to together
                in a team arrange events and guide exchange students at Umeå
                University.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
