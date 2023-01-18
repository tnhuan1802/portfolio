import React from "react";
import Typewriter from "typewriter-effect";
import './IntroText.css'
interface PropsType {}

const IntroText = (props: PropsType) => {
  return (
    <div className="intro-text">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDeleteSpeed("natural")
            .typeString("Welcome!")
            .pauseFor(1000)
            .deleteAll()
            .typeString("I'm Juan a Front-end Developer.")
            .pauseFor(1000)
            .deleteAll()
            .pauseFor(1000)
            .typeString("This is my personal portfolio website.")
            .pauseFor(1000)
            .deleteAll()
            .start();
        }}
        options={{
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default IntroText;
