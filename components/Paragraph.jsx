import React from 'react'

export default function Paragraph({children,className,sub}) {
  return (
    <p className={`${className} ${sub ? 'opacity-80 mt-2' : ' '} text-green`}>{children}</p>
  )
}
