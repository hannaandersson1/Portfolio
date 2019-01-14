import React from "react";

export const getCoverContent = id => {
  const exchangeSate = {
    text: <div>hej</div>
  };

  const accuratePlayer = {
    text: <div>hej</div>
  };
  const queueU = {
    cover: { color: "#fd668a", img: "./images/quPhone.png" },
    processes: [
      {
        steps: {
          processHead: "Research",
          list: ["Brainstorming", "Expert evaluation", "Define"]
        }
      },
      {
        steps: {
          processHead: "Design & Test I",
          list: ["Lo-Fi Prototype", "Interviews", "Card sorting test"]
        }
      },
      {
        steps: {
          processHead: "Design & Test II",
          list: ["Mid-Fi Prototype", "Guerrilla Testing", "Hi-Fi Prototype"]
        }
      },
      {
        steps: {
          processHead: "Analyze & Learn",
          list: ["Presentation", "Documentation"]
        }
      }
    ],
    text: (
      <div>
        <div className="intro-section">
          <div className="intro-section-left">
            <h1 className="h1-project">QueueU - The democratic DJ</h1>
            <h2 className="h2-project">Sep 2018 - Present | Umeå, Sweden</h2>
            <p>
              Me and two other students decided to make an application for
              people who like to share and listen to music together. Where
              people can queue songs to a playlist created by a host and also
              have the opportunity to spice up the party and add some challenges
              to friends in between the songs.
              <br />
              <br /> The aim of this project was to learn as much as possible
              when it comes to UX/UI Design. Hence, the focus was mainly on
              those parts.{" "}
            </p>
          </div>
          <div className="intro-section-right line-left">
            <p className="p-project">Context</p>
            <p className="p-bold">School project</p>
            <p className="p-project">Role</p>
            <p className="p-bold">UX/UI Designer</p>
            <p className="p-project">Tools/Technology</p>
            <p className="p-bold">Sketch, Principle, Trello, Xcode, Swift</p>
          </div>
        </div>
        <div className="process-section">
          <div className="process-section-small">
            <h2>Research</h2>
          </div>
          <div className="process-section-large">
            <p>
              After we had decided what to do, everyone in the group made a
              so-called expert evaluation. This is to find competitors and to
              identify what their weaknesses and strengths are and why. The
              purpose of this is to learn from others to provide a good
              foundation for the group's own idea.
            </p>
          </div>

          <div className="process-section-small">
            <h2>Design & Test I</h2>
          </div>
          <div className="process-section-large">
            <p>
              In this part of the project, all members of the team created Lo-Fi
              prototypes to generate different ideas and to have very simple
              sketches to explain the concept. We had short interviews with
              people to understand what they thought about the application. We
              performed a card sorting test to find out what features our
              audience considered important for the application. The subjects
              were asked to sort cards with different phrases based on what they
              consider to be most important. This gave us an early insight into
              what features are most desirable. Here is some user input:
            </p>
          </div>
        </div>
        <div className="image-section">
          <p className="quote">
            ” If everyone can change what song is playing, It’s going to be
            chaos ”
          </p>
          <p className="quote">
            ”It’s not important to know who queued the song”
          </p>
          <p className="quote">
            ”Adding challenges between to the songs, that sounds fun”
          </p>
          <img
            id="cardSort"
            src="../../public/images/CardSorting.jpg"
            alt="card-sorting-test"
          />
        </div>
        <div className="process-section">
          <div className="process-section-small">
            <h2>Design & Test II</h2>
          </div>
          <div className="process-section-large">
            <p>
              From there, we started with the Mid-Fi prototypes. We created
              mockups in Sketch and made them interactable for the Guerrilla
              testing. This approach of user testing is very effective and means
              that you are testing on anyone in a public place, such as a cafe
              or at school. The subject will be asked to perform short tasks on
              the application while you will observe the person.
            </p>
          </div>
        </div>
      </div>
    )
  };
  const mash = {
    text: <div>hej</div>
  };
  const content = {
    exchangeSate,
    accuratePlayer,
    queueU,
    mash
  };
  return content[id];
};
