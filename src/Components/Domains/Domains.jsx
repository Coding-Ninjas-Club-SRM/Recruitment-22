import React from "react";
import style2 from "../About/About.module.css";
import line from "../About/assets/about-line.png";
import style from "./Domains.module.css";
import { domContent as content } from "./Subcomponents/content";
import DomainBlock from "./Subcomponents/DomainBlock";

function Domains() {
  return (
    <section name="domains" className={` min-h-screen ${style.domainsSection}`}>
      <div className={`${style.domainHead}`}>
        <div>
          <h1 className={style.heading}>Domains</h1>
        </div>
        <div>
          <img className="w-full" src={line}></img>
        </div>
      </div>
      <div className="content  m-0 md:m-[75px]">
        {content.map((e) => (
          <DomainBlock
            title={e.title}
            details={e.details}
            image={e.image}
            name={e.title}
          />
        ))}
      </div>
    </section>
  );
}

export default Domains;
