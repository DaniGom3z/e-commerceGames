// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function entrada(props) {
  return (
    <>
      <input type={props.type} name={props.name} value={props.value} onChange={props.onChange} />
    </>
  );
}

entrada.propTypes = {
  type:PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default entrada;
