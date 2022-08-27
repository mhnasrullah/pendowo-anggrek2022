import React from 'react'

export default function Name({children,className}) {
  return (
    <h1 className={`text-brown font-semibold text-xl ${className ? className : ' ' } `}>{children}</h1>
  )
}
