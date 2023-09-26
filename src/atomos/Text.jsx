// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';


function text(props) {
  return (
    <>
    <p className={props.className}>{props.text}</p>
    </>
  )
}
text.PropTypes={
  text:PropTypes.string.isRequired,
  className:PropTypes.string.isRequired
}

export default text