import React from "react";

export const getCoverContent = id => {
  const accuratePlayer = {
    cover: { color: "#6b80bb", img: "/images/apDator.png" },
    processInfo: true,
    process: true,
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
            agile project method, and how to work in a big project where
            everyone had their own importent role.
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
    cover: { color: "#6b80bb", img: "/images/exchange.png" },
    processInfo: true,
    process: true,
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
          list: ["Workshop", "Wireframes", "User Test I"]
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
            During the autumn term 2018, me and two other students were assigned
            to build a website for exchange studies. The aim was to, through the
            website, encourage students of M.Sc in Interaction Technology and
            Design to study abroad, and to help out with the preparation work
            before the trip. <br />
            <br /> My role was to work with the whole process from idea to
            finished result. This included research, design, prototype, test and
            development. <br />
            <br /> From this, I brought with me how to plan and structure a
            limited project, I got the opportunity to use my skills to tackle a
            problem based on what the user wants and needs, and I especially
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
    text: (
      <div className="process-section">
        <div className="process-box">
          <div className="process-section-small">
            <h2>Research</h2>
          </div>
          <div className="process-section-large">
            <p>
              First, we needed to target our users and the problems and needs of
              the users. We wanted as much information as possible, hence we
              posted a survey in a facebook group with our target group. We also
              did In-depth interviews to get qualitative data. We interviewed
              both student that already have been abroad and students that are
              about to go abroad. We also interviewed personnel at Umeå the
              university that is responsible for exchange studies to better
              understanding every part of the process before and after the trip.
              <br />
              <br />
              From this, we got a good insight into what the users wanted the
              website to contain and we were able to structure the website
              according to all gathered information.
            </p>
          </div>
        </div>
        <div className="image-section">
          <img id="postit1" src="/images/postit1.png" alt="postit1" />
          <img id="postit2" src="/images/postit2.png" alt="postit2" />
          <img id="postit3" src="/images/postit3.png" alt="postit3" />
          <img id="postit4" src="/images/postit4.png" alt="postit4" />
          <img id="postit5" src="/images/postit5.png" alt="postit5" />
          <img id="postit6" src="/images/postit6.png" alt="postit6" />
        </div>
        <p>The structure of the website</p>
        <div className="process-box">
          <div className="process-section-small">
            <h2>Design & Test I</h2>
          </div>
          <div className="process-section-large">
            <p>
              We created a workshop where we together generated ideas of how we
              wanted the website to look like. We based our ideas on citations
              from the users and a mood board that we created. Later on, we
              started to create simple wireframes to be able to perform user
              tests. This gave us an early insight on what the users thought
              about the website.
            </p>
          </div>
        </div>
        <div className="process-box">
          <div className="process-section-small">
            <h2>Design & Test II</h2>
          </div>
          <div className="process-section-large">
            <p>
              In this phase, we focused on the graphical design. As the main
              idea was that the website would be inspiring we agreed on a
              colorful design with a lot of inspiring images. <br />
              <br />
              We played with many different colors and shapes and receive
              feedback from users before we could agree on one design to
              continue to work with.
            </p>
          </div>
        </div>
        <div className="process-box">
          <div className="process-section-small">
            <h2>My experience</h2>
          </div>
          <div className="process-section-large">
            <p>
              From this, I brought with me how to plan and structure a limited
              project, I got the opportunity to use my skills to tackle a
              problem based on what the user wants and needs, and I especially
              developed my programming skills in React.
            </p>
          </div>
        </div>
      </div>
    )
  };

  const hikikomori = {
    cover: { color: "#f9b002", img: "/images/hikikomori.png" },
    processInfo: false,
    process: false,
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
          list: ["Workshop", "Wireframes", "User Test I"]
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
          <h1 className="h1-project">Hikikomori - Calendar application</h1>
          <h2 className="h2-project">Nov 2016 - Dec 2016 | Umeå, Sweden</h2>
          <p>
            Hikikomori is an organization that helps adolescents that is
            isolated in their homes to get back to society. <br />
            <br /> During a school project, me and three other students came up
            with an idea of ​​a smart bracelet connected to a calendar
            application. The calender would have sent personal notifications and
            motivating messages to the users and aimed to help the adolescents
            get structure in their daily life and to gain self-esteem. During
            the project we had Madeleine Blusi, PhD in eHealth as a metor and
            got a lot of interesting insigt in how we could work with design to
            evoke desirable emotions. <br />
            <br /> My role was to work with UX/UI design.
          </p>
        </div>
        <div className="intro-section-right line-left">
          <p className="p-bold">Context</p>
          <p className="p-project">School project </p>
          <p className="p-bold">Client</p>
          <p className="p-project">Hikikomori</p>
          <p className="p-bold">Role</p>
          <p className="p-project">UX/UI Designer</p>
          <p className="p-bold">Tools/Technology</p>
          <p className="p-project">Sketch, Illustrator, Principle</p>
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
              Hikikomori is an orginization located in Umeå working with 20
              youths simultaneously. In the beginning the Hikikomori personal
              have single meetings and further on they integrate the youths in
              larger group activities. The activities occur the same time every
              week and consists of gaming-/playing-, physical- and outing
              events. The meaning with these events is to work with the
              adolescents social behaviour and to give them a “feel good”
              feeling.
              <br />
              <br />
              The aim of the project was to provide a service that benefit both
              the Hikikomori organization and the adolescents. They wanted a
              solution with the perspective of interactivity in smart
              environments, were these problems were considered.
              <br />
              <br />- How can participation be increased?
              <br />- How can the answer frequency for the activities be
              improved?
              <br /> - How can the adolescents be assisted in getting back to
              healthy daily routines?
              <br />- Is there ways of motivating the participants into leaving
              their house?
            </p>
          </div>
        </div>
        <div className="process-box">
          <div className="process-section-small">
            <h2>Team/My role</h2>
          </div>
          <div className="process-section-large">
            <p>
              My main task was to create the interface and wireframes in the
              design toolkit Sketch. I also was in charge of demostrating the
              product on a conferense at Umeå university.
              <br />
              <br />
              The team consisted of me, three other students and Madeleine
              Blusi, PhD in eHealth that help us understand our users as we were
              no able to carry out any user tests.
            </p>
          </div>
        </div>
        <div className="process-box">
          <div className="process-section-small">
            <h2>Target group</h2>
          </div>
          <div className="process-section-large">
            <p>
              Hikikomori is working with young adults between 16-25 years. The
              adolescents are separated by all social means. They are not
              working or studying, they get funded by their families and they do
              not hang out with any friends. All of them experience one or many
              problems, such as social phobia, depression, motivation and
              difficulty with routines including sleeping and eating. This might
              be the result from bullying, diagnosis (ADD, aspergers, OCD etc.)
            </p>
          </div>
        </div>
        <div className="process-box">
          <div className="process-section-small">
            <h2>Result</h2>
          </div>
          <div className="process-section-large">
            <p>
              The project resulted in a prototype that could illustrate how the
              product could be used in the real world.The images showes the
              final UI result. As they wanted a solution with the perspective of
              interactivity in smart environments an idea of a system connected
              to a bracelet that will collect information from three different
              sources was presented. The sources are: <br />
              <br /> - Pulse sensor: To determine the stress level on the
              activity.
              <br />- GPS: To keep track of how many persons attended the
              activity.
              <br />- Activity rating system: To get a subjective view from the
              adolescents.
              <br />
              <br />
              The system will triangulate with the help from these three sources
              and for each activity determine the “feel good” factor the person
              experienced. By supervised learning, in an artificial neural
              network, the system will finally learn the preferences of each
              individual, if the person likes specific activities, different
              amount of persons at the event etc. The system will then be able
              to motivate the adolescents to attend events with individually
              motivating invites.
            </p>
          </div>
        </div>
        <div className="image-section">
          <img id="hiki1" src="/images/hiki1.gif" alt="hiki1" />
          <img id="hiki2" src="/images/hiki2.gif" alt="hiki2" />
          <img id="hiki3" src="/images/hiki3.gif" alt="hiki3" />
          <img id="hiki4" src="/images/hiki4.gif" alt="hiki4" />
        </div>
        <p>The final UI design</p>
        <div className="process-box">
          <div className="process-section-small">
            <h2>My experience</h2>
          </div>
          <div className="process-section-large">
            <p>
              When entering this project there were several aspects to bear in
              mind. For example the adolescents were not able to carry out any
              user tests since it could cause them a stress that could conflict
              with their rehabilitation. This made the design process a bit
              different and it was even more importent for us to perceptive all
              possible information.
              <br />
              <br />
              We also got valuable tips from our mentor Madeleine Blusi when
              designing for users like this. We got understanding in how
              difficult and stressfull it can be to make decisions for the user,
              therefore it was important to have an option "maybe” included in
              our system. How green color can give a calm impression because it
              indicates that you have done something right is also something we
              got to learn. What I especially learned from this was how much
              data that is needed to create a functional artificial network.
            </p>
          </div>
        </div>
      </div>
    )
  };

  const mash = {
    cover: { color: "#f9b002", img: "/images/mash1.png" },
    processInfo: false,
    process: true,
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
            In a school project me and three other students come up with an idea
            of a social platform where students can write reviews and discuss
            courses at Umeå University.
            <br />
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
    cover: { color: "#fd668a", img: "/images/qu.png" },
    processInfo: true,
    process: true,
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
            who like to share and listen to music together. Where people can,
            through an application, connect to a Spotify account, join or create
            a party and queue songs to a playlist. They will also have the
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
              Everyone in the group made a so-called expert evaluation to
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
              mockups in Sketch and made them intractable to be able to perform
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
              The results from the Guerrilla testing told that we needed motion
              design in some parts of the application to get the users
              attention. We created the motion design in Principle.
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
              application was overlooked. Here is one example:
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
        <p>
          Final UI Design. Hosting a party to the left and joining a party to
          the right.
        </p>
      </div>
    )
  };

  const content = {
    accuratePlayer,
    exchangeSate,
    mash,
    queueU,
    hikikomori
  };
  return content[id];
};
