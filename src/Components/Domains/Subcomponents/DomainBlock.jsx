import React from 'react'
import style from "../Domains.module.css";

export default function DomainBlock(props) {
  return (
    <div className={` ${style.blockParent} `} name={props.name}>
        <div>
            <h2 className={` text-[#EE4623] font-semibold text-5xl mb-[1ch] w-min mx-auto md:mx-0 ${style.textShadowRed} ${style.font}`}>[{props.title}]</h2>
            <div className={`${style.details} ${style.font} pl-[1ch] my-3 ml-2 text-xl`}>{props.details}</div>
        </div>
        <div className={` w-[33vw] h-[33vw] ${style.imageBlock} `}>
            <img src={process.env.PUBLIC_URL+props.image} alt={`image for ${props.title}`} className={` w-[100%] h-[100%] `}/>
        </div>
    </div>
  )
}
