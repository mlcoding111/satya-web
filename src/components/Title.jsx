import React from 'react'

function Title({title}) {
  return (
    <div className="title">
        <h1>{title}</h1>
        <div className="divider" />
    </div>
  )
}

export default Title