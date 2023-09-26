// Boton.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';


function Button(props) {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.text}
    </button>
  );
  
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string, 
  text: PropTypes.string.isRequired,
};

export default Button;
