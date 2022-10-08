import React from "react";
import "./About.css";
import line from "./assets/about-line.png";
import frame from "./assets/Frame.png";

function About() {
  return (
    <div name="about us" className="about">
      <div>
        <h1 className="heading">About</h1>
      </div>
      <div>
        <img className="line" src={line}></img>
      </div>

      <div className="middle-abt">
        <div className="ab-txt">
          <span>
            Coding Ninjas Club SRM, our syndicate, is one of the institute's
            fastest-growing and one of the most popular clubs. We have fabulous
            student engagement which in turn makes us a highly interactive and
            informative club. We work in collaboration with the Coding Ninjas
            company. We have a footfall of over 50,000 young and bright minds
            from various concerts around the world. We are a diverse team of
            budding intellectuals, who are keen and highly driven to create.
          </span>
        </div>
        <div className="img-abt">
          <img src={frame} alt="h"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
