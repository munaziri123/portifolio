import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Mobile Apps developer",
          "Website Developer",
          "IT Tech support",
          "Social Media Marketing",
          "Creative Project idea developer",
          "Freelancer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 80,
      }}
    />
  );
}

export default Type;
