import React from 'react'
import './shopright.css'
import { headerList } from '../../../Atom/Atom';
import { ShopfilterLists } from '../../../Atom/Selector';
import { useRecoilValue, useRecoilState } from 'recoil'
import Fliter from './Fliter'

const ShopRight = () => {
  const [Post_filter_list, setPost_filter_list] = useRecoilState(headerList);
  const filterlist = useRecoilValue(ShopfilterLists);

  const changeProduct = (e) => {
    let a = e.target.value;

    if (a === '1') {
      const { price, ...rests } = Post_filter_list;
      console.log(rests);
      setPost_filter_list({ rests, newarrival: a });
    } else if (a === 'sort') {
      const { newarrival, price, ...restsort } = Post_filter_list;
      console.log(restsort);
      setPost_filter_list(restsort);
    } else {
      if (a === 'ASC') {
        const { newarrival, ...rest } = Post_filter_list;
        console.log(rest);
        setPost_filter_list({ rest, price: a });
      } else {
        const { newarrival, ...restts } = Post_filter_list;
        console.log(restts);
        setPost_filter_list({ restts, price: a });
      }
    }
  }
  return (
    <div>
      <div className="right_heading ">
        <div className="head_right">
          <span className='ms-2 head_show'>showing 1-20 of products</span>
          <div className="head_select d-inline-block me-2">
            <select className="form-select" onChange={changeProduct} aria-label="Default select example">
              <option value='sort' >sort by</option>
              <option value='1'>new arrivals</option>
              <option value="ASC">price(low to high)</option>
              <option value="DESC">price(high to low)</option>
            </select>
          </div>
        </div>
      </div>
      <Fliter list={filterlist} />
    </div>
  )
}

export default ShopRight