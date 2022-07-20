import React, { Suspense } from 'react'
import './shop.css'
import ShopLeft from './left/ShopLeft';
import ShopRight from './right/ShopRight';
import CircularIndeterminate from '../Skelecton'
// import {useRecoilValue} from 'recoil';
// import {ShopfilterLists,ShopCategoryLists} from '../../Atom/Selector'

const Shop = () => {
  // const filt = useRecoilValue(ShopCategoryLists)
  // console.log(filt);
  return (
    <div className='container'>
      <div className="row">
        <div className="col-3 left_shop p-4">
          <ShopLeft />
        </div>
        <Suspense fallback={<div className='s_class'><span><CircularIndeterminate /></span><span>Loading</span></div>}>
          <div className=" col-9 right_shop pt-4">
            <ShopRight />
          </div>
        </Suspense>
      </div>
    </div>
  )
}

export default Shop