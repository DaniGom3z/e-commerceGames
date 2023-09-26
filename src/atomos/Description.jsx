// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';


function description(props) {
  return (
    <p className={props.className}>{props.text}</p>
  )
}
description.PropTypes={
    text:PropTypes.string.isRequired,
    className:PropTypes.string.isRequired
}

export default description