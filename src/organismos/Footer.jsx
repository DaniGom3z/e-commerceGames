// eslint-disable-next-line no-unused-vars
import React from 'react'
import Titulo from '../atomos/Title'
import Acerca from '../atomos/Description'

function footer() {
  return (
    <>
    <div id='acerca' className='bg-footer-color w-screen h-40 flex flex-col md:flex-row'>
        <Titulo text="PlayPalace" className=" text-black ml-8 text-3xl p-10"/>
        <Acerca text="Los mejores juegos en la actualidad" className=" text-2xl text-white ml-60 pt-11"/>
    </div>
    </>
  )
}

export default footer

