import React from 'react'

function Teacher (props) {
  return (
    <li className="Teacher">
      <span>{ props.name } </span>
      <a href={`https://twitter.com/${props.twitter}`}>
        @{ props.twitter }
      </a>
    </li>
  )
}

export default Teacher
