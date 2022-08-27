import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'

export default function GroupHeading({heading,sub,direction="left"}) {
  return (
    <>
        <Heading
          type = "nd"
          direction={direction}
          >{heading}</Heading>
        <Paragraph sub className={`lg:w-6/12 ${direction=='right' ? 'text-right ml-auto' : ' '} ${direction=='center' ? 'text-center mx-auto' : ' '}`}>{sub}</Paragraph>
    </>
  )
}
