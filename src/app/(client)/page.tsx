
import React from 'react'
import Slider from './components/home/Slider'
import OutstandingProduct from './components/home/OutstandingProduct';
import ProductNew from './components/home/ProductNew';

const Home = () => {
  return (
    <div>
      <Slider/>
      <OutstandingProduct/>
      <ProductNew/>
    </div>
  )
}

export default Home