// Anchor.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function Anchor(props) {
  return (
    <a href={props.href} className={props.className} onClick={props.onClick}>
      {props.text}
    </a>
  );
}

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Anchor;
