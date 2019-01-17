import React from "react";
import "./Cover.scss";

const Cover = () => {
  return (
    <div className="cover">
      <div className="cover-conainer">
        <h1 className="h1-cover">Hi, I’m Hanna.</h1>
        <h2 className="h2-cover">
          I'm a <p className="text-cover">UX Designer</p> and{" "}
          <p className="text-cover">Developer</p> based in Stockholm, Sweden.{" "}
          <br /> Interested in working together or are you up for a coffee?
        </h2>
        <a
          className="say-hello-link"
          href="mailto:hannaandersson010@gmail.com?Subject=Hello%20Hanna"
          target="_top"
        >
          Say Hello
        </a>
        <img className="arrow" src="/images/arrowdown.svg" alt="arrow" />
      </div>
    </div>
  );
};

export default Cover;
