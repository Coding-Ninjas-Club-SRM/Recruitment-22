import React from "react";
import "./About.css";
import frame from "./assets/Frame.png";
import line from './assets/about-line.png';

function About() {
  return (
    <div className="about">
      <div>
      <h1 className="heading">About</h1>
      </div>
<div>
  <img className="line" src={line}></img>
</div>

      <div className="middle-abt">

          <div className="ab-txt" > 
            <span >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Mauris eu rhoncus quam justo aliquet non. Potenti 
             aliquam arcu, dignissim ut sed facilisi
              mi suspendisse. Neque cras mi quis molestie amet. 
              Gravida gravida semper vulputate praesent</span>
          </div>
          <div className="img-abt">
            <img 
            src={frame}
            alt="h">

            </img>
          </div>


      </div>
      
    </div>
  );
}

export default About;
