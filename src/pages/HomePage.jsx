// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Footer from '../organismos/Footer';
import Banner from '../organismos/Banner';
import Header from '../organismos/header'; 
import Blog from '../organismos/Blog'; 

function HomePage() {
  // Inicializa el estado con los datos importados
  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

  return (
    <>
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <main>
        <Banner />
        <Blog
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
