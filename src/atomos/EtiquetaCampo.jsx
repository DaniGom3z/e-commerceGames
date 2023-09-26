// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function EtiquetaCampo(props) {
  return (
    <label className={props.className} htmlFor={props.htmlFor}>
      {props.text}
    </label>
  );
}

EtiquetaCampo.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className:PropTypes.string.isRequired
};

export default EtiquetaCampo;
