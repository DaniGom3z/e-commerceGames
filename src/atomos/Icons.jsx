// Icon.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function Icon({ iconName }) {
  // Ruta a la imagen relativa a la raíz del proyecto
  const imagePath = `../img/${iconName}`;

  return (
    <img src={imagePath} alt={iconName} />
  );
}

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export default Icon;
