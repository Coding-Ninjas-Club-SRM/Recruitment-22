import React from "react";
import style from "./Domains.module.css";
import DomainBlock from "./Subcomponents/DomainBlock";
import line from "../About/assets/about-line.png"
import { domContent as content } from "./Subcomponents/content";

function Domains() {

  return (
    <section className=" min-h-screen">
      <div>
        <h1 className="heading">Domains</h1>
      </div>
      <div>
        <img className="line" src={line}></img>
      </div>
      <div className="content  m-[75px] ">
        {content.map(e => <DomainBlock title = {e.title} details = {e.details} image = {e.image}/>)}
      </div>
    </section>
  );
}

export default Domains;
