import React from "react";
import style from "./About.module.css";
import line from "./assets/about-line.png";
import frame from "./assets/Frame.png";

function About() {
  return (
    <div name="about us" className={style.about}>
      <div>
        <h1 className={style.heading}>About</h1>
      </div>
      <div>
        <img className={style.line} src={line}></img>
      </div>

      <div className={style.middleabt}>
        <div className={style.abtxt}>
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
        <div className={style.imgabt}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5I_exRiVuQQ?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            autoplay
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default About;
