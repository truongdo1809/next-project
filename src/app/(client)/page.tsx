
import React from 'react'
import Slider from './components/home/Slider'
import OutstandingProduct from './components/home/OutstandingProduct';
import ProductNew from './components/home/ProductNew';
import Media from './components/home/Media';
import Policy from './components/home/Policy';

const Home = () => {
  return (
    <div>
      <Slider/>
      <OutstandingProduct/>
      <ProductNew/>
      <Policy/>
      <Media/>
    </div>
  )
}

export default Home