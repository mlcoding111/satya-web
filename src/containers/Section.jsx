import React from 'react'
import LeftDivider from '../components/LeftDivider'
function Section(props) {
  return (
    <section id={props.id}>
      <LeftDivider />
        {props.children}
    </section>
  )
}

export default Section