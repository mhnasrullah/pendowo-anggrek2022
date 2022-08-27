import React from 'react'
import style from './style.module.css'

export default function Heading({
  children,
  type,
  direction = "left"
}) {

  let cls = `font-bold z-10 text-green relative leading-[140%] lg:leading-[140%] w-fit ${type==="st" ? "text-3xl lg:text-5xl" : " "} ${type==="nd" ? "text-2xl lg:text-4xl" : " "} ${type==="st" ? style.shapeMain : ' '} ${type==="nd" ? style.shapeSub : ' '} `;

  if(direction == "left"){cls+="text-left"};
  if(direction == "center"){cls+="text-center mx-auto"};
  if(direction == "right"){cls+="text-right ml-auto"};

  return (
    <h1 className={cls}>{children}</h1>
  )
}
