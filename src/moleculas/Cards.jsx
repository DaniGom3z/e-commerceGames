// Importa React y PropTypes
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import Boton from '../atomos/Button';
import Titulo from '../atomos/Title';
import Descripcion from '../atomos/Description';

function Cards({ buttonText, buttonClickHandler, titleText, descriptionText, claseTitulo, imageSrc}) {
  return (
    <div className='bg-slate-400 w-64 h-96 mb-2 rounded ml-10 relative'>
      <img src={imageSrc} alt={titleText} className='w-64 h-48 object-cover rounded-t ' />
      <Titulo text={titleText} className={claseTitulo} />
      <Descripcion text={descriptionText} className="ml-3 mr-3 text-center" />
      <Boton text={buttonText} onClick={buttonClickHandler} />
    </div>
  );
}

Cards.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonClickHandler: PropTypes.func.isRequired,
  titleText: PropTypes.string.isRequired,
  claseTitulo: PropTypes.string.isRequired,
  descriptionText: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Cards;
