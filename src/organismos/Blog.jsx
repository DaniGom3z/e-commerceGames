// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Cards from '../moleculas/Cards';
import PropTypes from 'prop-types';
import { data } from '../data';

function Blog({
  allProducts,
  setAllProducts,
  total,
  setTotal,
  countProducts,
  setCountProducts,
}) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log(product);
    setCart([...cart, product]);
    // Actualiza el estado del carrito en el componente padre (HomePage.js)
    setAllProducts([...allProducts, product]);
    setTotal(total + product.price);
    setCountProducts(countProducts + 1);
  };

  const cardData = data.map((product, index) => ({
    buttonText: index < 2 ? (
      <button className="bg-red-500 text-white h-12 w-28 mb-4 mx-4 hover:bg-red-700 rounded absolute bottom-0 left-0" onClick={() => addToCart(product)}>Añadir al carrito</button>
    ) : (
      <button className="bg-blue-500 h-12 w-28 mb-4 mx-4 hover:bg-blue-700 rounded absolute bottom-0 left-0" onClick={() => addToCart(product)}>Añadir al carrito</button>
    ),
    claseTitulo: "text-red-700 text-lg font-medium text-center p-3",
    titleText: product.nameProduct,
    descriptionText: `$${product.price}`,
    imageSrc: product.img,
  }));

  // Divide las tarjetas en dos filas
  const topRowCards = cardData.slice(0, 4);
  const bottomRowCards = cardData.slice(4);

  return (
    <div id='juegos' className='flex flex-col items-center bg-custom-color'>
      <div className='flex flex-wrap justify-center'>
        {/* Tarjetas en la parte superior */}
        {topRowCards.map((card, index) => (
          <div key={index} className='flex flex-col m-2'>
            <Cards {...card} />
          </div>
        ))}
      </div>

      <div className='flex flex-wrap justify-center mt-4'>
        {/* Tarjetas en la parte inferior */}
        {bottomRowCards.map((card, index) => (
          <div key={index} className='flex flex-col m-2'>
            <Cards {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}
Blog.propTypes = {
  allProducts: PropTypes.array.isRequired,
  setAllProducts: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  setTotal: PropTypes.func.isRequired, // Include setTotal in PropTypes
  countProducts: PropTypes.number.isRequired,
  setCountProducts: PropTypes.func.isRequired,
};


export default Blog;
