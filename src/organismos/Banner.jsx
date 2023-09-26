// eslint-disable-next-line no-unused-vars
import React from 'react';
import fondo from '../img/fondo.png';
import Titulo from '../atomos/Title';


function Banner() {
  const divStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', 
    gap: '20px',
    backgroundImage: `url(${fondo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '600px',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div style={divStyle}>
       <div className=' ml-20'>
        <Titulo text='El mejor lugar para comprar juegos' className=' text-white font-medium font-serif text-3xl items-start w-56 mt-44 ml-24' />
      </div>
      <div className=' mt-32'>
      </div>
    </div>
  );
}

export default Banner;
