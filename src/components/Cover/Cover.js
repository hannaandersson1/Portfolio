import React from "react";
import "./Cover.scss";

const Cover = () => {
  return (
    <div className="cover">
      <h1 className="h1-cover">Hi, I’m Hanna.</h1>
      <h2 className="h2-cover">
        I'm a <p className="text-cover">UX Designer</p> and{" "}
        <p className="text-cover">Front End Developer</p>
      </h2>
      <button
        className="say-hello-link"
        href="mailto:hannaandersson010@gmail.com?Subject=Hello%20Hanna"
        target="_top"
      >
        SAY HELLO
      </button>
    </div>
  );
};

export default Cover;
