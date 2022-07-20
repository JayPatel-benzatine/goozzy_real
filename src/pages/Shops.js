import React, { Suspense } from 'react'
import MainNav from '../component/navbar/MainNav'
import Jumbotron from '../component/jumbatron/Jumbotron';
import Footer from '../component/footer/Footer'
import Scroll from '../component/Scroll Button/Scroll'
import Shop from '../component/shop/Shop';
const Shops = () => {
  return (
    <div className='profile'>
      <MainNav />
      <Jumbotron name='collection' />
      <Suspense fallback={<div>Loading</div>}>
        <Shop />
      </Suspense>
      <Footer />
      <Scroll />
    </div>
  )
}

export default Shops