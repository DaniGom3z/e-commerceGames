// Componente Title.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function Title(props) {
  return <h1 className={props.className}>{props.text}</h1>;
}

Title.propTypes = {
  text: PropTypes.string.isRequired, // Asegura que la prop "text" es una cadena (string) requerida.
  className:PropTypes.string.isRequired
};

export default Title;
