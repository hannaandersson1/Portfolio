import React from "react";

export const getCoverContent = id => {
  const accuratePlayer = {
    cover: { color: "#6b80bb", img: "/images/aP.svg" },
    subColor: "#F6F8FF",
    processInfo: true,
    processes: [
      {
        steps: {
          processHead: "Research",
          list: ["Interviews", "World Exploration", "Jurney Map", "Story Map"]
        }
      },
      {
        steps: {
          processHead: "Design & Test I",
          list: ["Workshop", "Lo-Fi Prototype", "User Test I"]
        }
      },
      {
        steps: {
          processHead: "Design & Test II",
          list: ["Hi-Fi Prototype", "User Test II", "Iterate"]
        }
      },
      {
        steps: {
          processHead: "Implement",
          list: [
            "Recive UI Design",
            "Frontend Developing",
            "Reviewe Code",
            "Iterate"
          ]
        }
      },
      {
        steps: {
          processHead: "Deliver",
          list: ["Presentation", "Documentation"]
        }
      }
    ],
    intro: (
      <div className="intro-section">
        <div className="intro-section-left">
          <h1 className="h1-project">Consultant at Accurate Player</h1>
          <h2 className="h2-project">Jul 2018 - Aug 2018 | Umeå, Sweden</h2>
          <p>
            I started my own company to consult the startup Accurate Player that
            is a subsidiary of Codemill. Codemill is a company located in Umeå,
            working with many major international companies, mostly in the media
            and fashion industries. Accurate player is a tool used for review
            and quality control of videos. <br />
            <br /> The project was limited to five weeks and the assignment was
            to deliver a thorough preparation work to a CMS-based web page for
            the product.
            <br />
            <br /> My role was to work with UX Design and front end development.
            From this project, I brought with me how to work according to an
            agile project method, and how to work in a big project were everyone
            had their own importent role.
          </p>
        </div>
        <div className="intro-section-right line-left">
          <p className="p-bold">Context</p>
          <p className="p-project">Consultant project</p>
          <p className="p-bold">Client</p>
          <p className="p-project">Accurate Player/Codemill</p>
          <p className="p-bold">Role</p>
          <p className="p-project">UX Designer, Front End Developer</p>
          <p className="p-bold">Tools/Technology</p>
          <p className="p-project">
            Sketch, inVision, Favro, Visual Studio Code, HTML, SASS, Hotjar,
            Google Analytics
          </p>
        </div>
      </div>
    ),
    text: (
      <div className="process-section">
        <div className="process-box">
          <div className="process-section-small">
            <h2>Research</h2>
          </div>
          <div className="process-section-large">
            <p>
              First of we needed to understand the users and the industry. We
              started out by interviewing the sellers at Codemill as we were not
              able to carry out any user tests on the actual buyers of the
              product. We also did some world exploration to understand the
              broadcast industry and to get inspiration. After analyzing the
              answers form the interviews we were able to target three main
              users. We kept these users in mind throughout the project.
            </p>
          </div>
        </div>
        <div className="quote-section">
          <div className="quote-box">
            <p className="p-bold">Head of animation/Graphic Designer</p>
            <p className="quote">”How does the product help me?”</p>
          </div>
          <div className="quote-box">
            <p className="p-bold">Executive director</p>
            <p className="quote">”How can the product benifit the company?”</p>
          </div>
          <div className="quote-box">
            <p className="p-bold">CTO/Developer</p>
            <p className="quote">
              ”How can the product be integrated with the companies own system”
            </p>
          </div>
        </div>
        <div className="process-box">
          <div className="process-section-small">
            <h2>Research</h2>
          </div>
          <div className="process-section-large">
            <p>
              To convey the urgency and delight of the core tasks of the web
              page and to make sure everyone was solving the same problem we did
              a story map. We also did a Jurney map to understand the customer
              actions and interactions with the web page. In order to do so, we
              used the heatmap from Hotjar and Google Analytics to understand
              how the users navigated on the previous website.
            </p>
          </div>
        </div>
        <div className="image-section">
          <img id="storymapAp" src="/images/storymapAp.png" alt="storymapAp" />
          <img
            id="jurneymapAp"
            src="/images/jurneymapAp.png"
            alt="jurneymapAp"
          />
        </div>
        <p>Story map and Jurney map</p>
        <div className="process-box">
          <div className="process-section-small">
            <h2>Design & Test I</h2>
          </div>
          <div className="process-section-large">
            <p>
              Next step was to sketch up ideas of how we wanted the web page to
              look like. During a workshop, everyone in the team generated as
              many ideas as possible in ten minutes. From there, the team
              narrowed down the ideas to one single sketch per person. Everyone
              got three green stickers each to place on things they liked in the
              design proposals. Later on, one sketch was made based on the
              conclusions from the workshop. User testing was performed on the
              final Lo-Fi prototype.
            </p>
          </div>
        </div>
        <div className="image-section">
          <img id="loFIAp1" src="/images/loFIAp1.png" alt="loFIAp1" />
          <img id="loFiAp2" src="/images/loFiAp2.png" alt="loFiAp2" />
        </div>
        <p>Lo-Fi prototypes</p>
        <div className="process-box">
          <div className="process-section-small">
            <h2>Design & Test II</h2>
          </div>
          <div className="process-section-large">
            <p>
              Next up was the creation of wireframes. The wireframes were made
              in the design toolkit Sketch and a mobile- and a desktop view was
              made to each page. User testing was performed on the wireframes
              and then changes were made according to the results. This was
              iterated three times.
            </p>
          </div>
        </div>
        <div className="image-section">
          <img
            id="APWireframes"
            src="/images/APWireframes.png"
            alt="APWireframes"
          />
        </div>
        <p>Some of the wireframes created in Sketch</p>
        <div className="process-box">
          <div className="process-section-small">
            <h2>Implement & Deliver</h2>
          </div>
          <div className="process-section-large">
            <p>
              When it was time for implementation, it was important that the
              code was structured according to the company's standard. Therefore
              all code was reviewed by at least two experts before it was added
              to the project.
              <br />
              <br /> What we accomplished during five weeks was to gather a lot
              of research information, wireframes, user testing results and an
              almost completed web page. As the web page is not published yet I
              can't present the final result.
            </p>
          </div>
        </div>
        <div className="process-box">
          <div className="process-section-small">
            <h2>My experience</h2>
          </div>
          <div className="process-section-large">
            <p>
              The project turned out to be very successful. The team was
              satisfied with what we had accomplished during fives weeks and I
              left the project with a lot of new knowledge and an eye for higher
              standards. The most valuable asset that I gained through this work
              was being surrounded and getting inspired by professional UX
              Designers and developers.
              <br />
              <br />I brought with me how to work according to an agile project
              method and to work in a big project were everyone had their own
              importent role. I also developed my programming skills and my
              skill to work as a team, and share experience in an effective
              manner.
            </p>
          </div>
        </div>
      </div>
    )
  };

  const exchangeSate = {
    cover: { color: "#6b80bb", img: "/images/aP.svg" },
    subColor: "#F6F8FF",
    processInfo: true,
    processes: [
      {
        steps: {
          processHead: "Research",
          list: ["Brainstorming", "Survey", "In-depth interviews"]
        }
      },
      {
        steps: {
          processHead: "Design & Test I",
          list: [
            "Structure information",
            "Workshop",
            "Wireframes",
            "User Test I"
          ]
        }
      },
      {
        steps: {
          processHead: "Design & Test II",
          list: ["Graphic design", "Hi-Fi Prototype", "User Test II"]
        }
      },
      {
        steps: {
          processHead: "Implement",
          list: ["programming", "Receive feedback", "Iterate"]
        }
      },
      {
        steps: {
          processHead: "Deliver",
          list: ["Presentation", "Documentation"]
        }
      }
    ],
    intro: (
      <div className="intro-section">
        <div className="intro-section-left">
          <h1 className="h1-project">Website for exchange studies</h1>
          <h2 className="h2-project">Sep 2018 - Dec 2018 | Umeå, Sweden</h2>
          <p>
            During the autumn semester 2018, me and two other students were
            assigned to build a website for exchange studies. The aim was to,
            through the website, encourage students of M.Sc in Interaction
            Technology and Design to study abroad, and to help out with the
            preparation work before the trip. <br />
            <br /> My role was to work with the whole process from idea to
            finished result. This included research, design, prototype, test and
            development. <br />
            <br /> From this, I brought with me how to plan and structure a
            limited project, I got the oppurtunity to use my skills to tackle a
            problem based on what the user want and needs, and I especially
            developed my programming skills in React.
          </p>
        </div>
        <div className="intro-section-right line-left">
          <p className="p-bold">Client</p>
          <p className="p-project">Umeå University</p>
          <p className="p-bold">Role</p>
          <p className="p-project">UX/UI Designer, Front End Developer</p>
          <p className="p-bold">Tools/Technology</p>
          <p className="p-project">
            Sketch, Mural, Trello, Visual Studio Code, React, HTML, SASS, Github
          </p>
        </div>
      </div>
    ),
    text: <div>hej</div>
  };

  const mash = {
    cover: { color: "#f9b002", img: "/images/mash1.png" },
    subColor: "#FFFBF2",
    processInfo: false,
    processes: [
      {
        steps: {
          processHead: "Research",
          list: ["Survey", "World Exploration"]
        }
      },
      {
        steps: {
          processHead: "Design & Test",
          list: ["Prototype", "Interviews", "User Testing"]
        }
      },
      {
        steps: {
          processHead: "Design & Test II",
          list: ["Make it", "Try it out", "Hi-Fi Prototype"]
        }
      },
      {
        steps: {
          processHead: "Analyze & Learn",
          list: ["Presentation", "Documentation"]
        }
      }
    ],
    intro: (
      <div className="intro-section">
        <div className="intro-section-left">
          <h1 className="h1-project">MASH - Course reviewing application</h1>
          <h2 className="h2-project">Apr 2018 - Jun 2018 | Umeå, Sweden</h2>
          <p>
            In a short school project me and three other students come up with
            an idea of an application where people can reviewing courses and
            also read other peoples reviews. <br />
            <br /> The aim was to provide a solution that will make it easier to
            choose what courses to read and also to prepare and engage students.{" "}
            <br />
            <br /> My main responsibility in this project was front end
            development. I was also involved in the UX design work, such as user
            research, user testing, and creating mockups.
          </p>
        </div>
        <div className="intro-section-right line-left">
          <p className="p-bold">Context</p>
          <p className="p-project">School project</p>
          <p className="p-bold">Role</p>
          <p className="p-project">UX/UI Designer, Front End Developer</p>
          <p className="p-bold">Tools/Technology</p>
          <p className="p-project">
            Sketch, Visual Studio Code, Meteor, React, HTML/CSS
          </p>
        </div>
      </div>
    ),
    text: (
      <div className="process-section">
        <div className="process-box">
          <div className="process-section-small">
            <h2>Challenge</h2>
          </div>
          <div className="process-section-large">
            <p>
              Next semester is coming up, and it's time to apply for classes.
              There are plenty of options, and it's not easy to know what to
              choose. Going through the curriculum of the classes aren’t always
              sufficient to get an idea of what they are really about. Usually,
              people end up taking the same courses as friends, or, choosing
              something that sounds interesting, but don't really know what to
              expect. Do you recognize the struggle?
            </p>
          </div>

          <div className="process-section-small">
            <h2>Solution</h2>
          </div>
          <div className="process-section-large">
            <p>
              An application that provides information about classes and its
              content. The users can review courses and read what others have
              said about the course. The possibility to agree/not agree on
              reviews will also be provided. The goal with the application is to
              make the user:
              <br />
              <br />- Awere
              <br />- Motivated
              <br />- Interested
              <br />- Engaged
            </p>
          </div>
        </div>
        <div className="process-box-self">
          <h2>Final UI Design</h2>
        </div>
        <div className="image-section">
          <img
            id="mashResult1"
            src="/images/mashResult1.png"
            alt="mashResult1"
          />
          <img
            id="mashResult2"
            src="/images/mashResult2.png"
            alt="mashResult2"
          />
          <img
            id="mashResult3"
            src="/images/mashResult3.png"
            alt="mashResult3"
          />
          <img
            id="mashResult4"
            src="/images/mashResult4.png"
            alt="mashResult4"
          />
        </div>
      </div>
    )
  };

  const queueU = {
    cover: { color: "#fd668a", img: "/images/quPhone.png" },
    subColor: "#FFF7F9",
    processInfo: true,
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
          list: [
            "Mid-Fi Prototype",
            "Guerrilla Testing",
            "Hi-Fi Prototype",
            "Microcopy"
          ]
        }
      },
      {
        steps: {
          processHead: "Analyze & Learn",
          list: ["Presentation", "Documentation"]
        }
      }
    ],

    intro: (
      <div className="intro-section">
        <div className="intro-section-left">
          <h1 className="h1-project">QueueU - The democratic DJ</h1>
          <h2 className="h2-project">Sep 2018 - Dec 2018 | Umeå, Sweden</h2>
          <p>
            Me and two other students decided to make an application for people
            who like to share and listen to music together. Where people can
            queue songs to a playlist created by a host and also have the
            opportunity to spice up the party and add some challenges to friends
            in between the songs.
            <br />
            <br /> The aim of this project was to learn as much as possible when
            it comes to UX/UI Design. Hence, the focus was mainly on those
            parts.{" "}
          </p>
        </div>
        <div className="intro-section-right">
          <p className="p-bold">Context</p>
          <p className="p-project">School project</p>
          <p className="p-bold">Role</p>
          <p className="p-project">UX/UI Designer</p>
          <p className="p-bold">Tools/Technology</p>
          <p className="p-project">Sketch, Principle, Trello, Xcode, Swift</p>
        </div>
      </div>
    ),
    text: (
      <div className="process-section">
        <div className="process-box">
          <div className="process-section-small">
            <h2>Research</h2>
          </div>
          <div className="process-section-large">
            <p>
              Everyone in the group, made a so-called expert evaluation to
              identify competitors and their weaknesses/strengths. The purpose
              of this was to learn from others to provide a good foundation for
              the group's own idea.
            </p>
          </div>

          <div className="process-section-small">
            <h2>Design & Test I</h2>
          </div>
          <div className="process-section-large">
            <p>
              In this part of the project, Lo-Fi prototypes were created. We
              performed short interviews to understand what the users thought
              about the concept.
              <br />
              <br /> To get an early insight into what features our audience
              considered important, a card sorting test was performed. Users
              were asked to sort cards with different phrases based on what they
              consider to be most important. Here is some user input:
            </p>
          </div>
        </div>
        <div className="quote-section">
          <div className="quote-box">
            <p className="quote">
              ” If everyone can change what song is playing, It’s going to be
              chaos ”
            </p>
          </div>
          <div className="quote-box">
            <p className="quote">
              ”It’s not important to know who queued the song”
            </p>
          </div>
          <div className="quote-box">
            <p className="quote">
              ”Adding challenges between to the songs, that sounds fun”
            </p>
          </div>
        </div>
        <div className="image-section">
          <img
            id="cardSorting1"
            src="/images/cardSorting1.png"
            alt="cardSorting1"
          />
          <img
            id="cardSorting2"
            src="/images/cardSorting2.png"
            alt="cardSorting2"
          />
        </div>
        <p>The card sorting test</p>
        <div className="process-box">
          <div className="process-section-small">
            <h2>Design & Test II</h2>
          </div>
          <div className="process-section-large">
            <p>
              From there, we started with the Mid-Fi prototypes. We created
              mockups in Sketch and made them interactable to be able to perform
              Guerrilla testing. The subjects were asked to perform short tasks
              on the application while we observed them.
            </p>
          </div>
        </div>
        <div className="image-section">
          <img
            id="wireframesQu"
            src="/images/wireframesQu.png"
            alt="wireframesQu"
          />
        </div>
        <p>Some of the muckups created in the design toolkit Sketch</p>
        <div className="process-box">
          <div className="process-section-small">
            <h2>Motion Design</h2>
          </div>
          <div className="process-section-large">
            <p>
              From the Guerrilla testing, we understood we needed motion design
              in some parts of the application to get the users attention. We
              created the motion design in Principle.
            </p>
          </div>
        </div>
        <div className="image-section">
          <img
            id="gift-animation"
            src="/images/gift-animation.gif"
            alt="gift-animation"
          />
          <img
            id="code-animation"
            src="/images/code-animation.gif"
            alt="code-animation"
          />
        </div>
        <p>Motion design created in Principle</p>
        <div className="process-box">
          <div className="process-section-small">
            <h2>Microcopy</h2>
          </div>
          <div className="process-section-large">
            <p>
              It was important that the application communicated with the users
              in a friendly- and informative way. Hence, the microcopy of the
              application was overlooked. Here are one example:
              <br />
              <br />
              If the user tries to quit a party a sign will pop up saying ”Are
              you sure”. We noticed, almost everyone answered ”yes” directly
              without reading the text in the sign. If we wrote ”Hold up”
              instead almost everyone read the text before they answered. This,
              in turn, made us understand the importance of microcopy.
            </p>
          </div>
        </div>
        <div className="image-section">
          <img
            id="microcopyQu"
            src="/images/microcopyQu.png"
            alt="microcopyQu"
          />
        </div>
        <p>The ”Are you sure” sign VS the ”Hold up” sign. </p>
        <div className="image-section">
          <img
            id="microcopy2Qu"
            src="/images/microcopy2Qu.png"
            alt="microcopy2Qu"
          />
        </div>
        <p>Informative VS informative and friendly.</p>
        <div className="process-box-self">
          <h2>Final UI Design</h2>
        </div>
        <div className="image-section">
          <img id="hosting" src="/images/hosting.gif" alt="hosting" />
          <img id="joining" src="/images/joining.gif" alt="joining" />
        </div>
        <p>Final UI Design. Hosting to the left and joining to the right.</p>
      </div>
    )
  };

  const content = {
    accuratePlayer,
    exchangeSate,
    mash,
    queueU
  };
  return content[id];
};
