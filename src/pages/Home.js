import React, { Suspense } from 'react'
import Carousel from '../component/Carousel/Carousel'
import Footer from '../component/footer/Footer'
import MainNav from '../component/navbar/MainNav'
import Hcategories from '../component/Home_Categories/Hcategories'
import Trends from '../component/trending/Trends'
import TrendCards from '../component/trending/TrendCards'
import Catelogs from '../component/cateloges/Catelogs'
import Scroll from '../component/Scroll Button/Scroll'
import SpecialProducts from '../component/Special product/SpecialProducts'
const Home = () => {

  return (
    <div>
      <MainNav />
      <Suspense fallback={<div>Loading</div>} >
        <Carousel />
      </Suspense>
      <Hcategories />
      <TrendCards />
      <Trends />
      <SpecialProducts />
      <Catelogs />
      <Footer />
      <Scroll />
    </div>
  )
}

export default Home