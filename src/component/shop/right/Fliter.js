import { Rating } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './shopright.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Fliter = ({list}) => {
  return (
    <div>
         <div className="list_filter mt-4">
        {
            list.map((elm, i) => {
            return (
              <>
                <div className="F_cards" >
                    <div id='p_cards' key={i} className="cards w-100 img_wrapper ">
                      <div className="lable-block">
                        <span className={elm.offerPrice ? "lable_offer " : 'd-none'}>Offer</span>
                        <span className={elm.isonsale === '1' ? "lable_sale" : 'd-none'}>on sale</span>
                      </div>
                      <div className="front">
                        <Link to={`/productDetails/${elm.id}`} >
                          <img key={i} className="img-fluid"
                            src={elm.productImages[0].name} alt='error'/>
                        </Link>
                      </div>
                      <div className="product-detail">
                        <div>
                          <div className="m-2">
                            <Rating rating={elm.rating} />
                          </div>
                          <h5 className='m-2 text-capitalize fs-6'>{elm.name}</h5>
                          <h4 className='d-flex ms-2'>
                            {
                              elm.offerPrice ?
                                (<>
                                  <span className={elm.offerPrice ? "fs-5  " : 'd-none'}> ${elm.offerPrice} </span>
                                  <del className='ms-1 d-flex align-items-center text-muted '><div className="fs-6"> ${elm.price} </div></del>
                                </>
                                ) : (
                                  <>
                                    <div className=" fs-5"> ${elm.price} </div>
                                  </>
                                )
                            }
                          </h4>
                        </div>
                      </div>
                      <div className="menus_filter d-flex flex-column">
                        <ShoppingCartOutlinedIcon className='cart_menu mb-2' />
                        <FavoriteBorderIcon className='Fav_menu' />
                      </div>
                    </div>
                </div>
              </>

            )
          })
        }

      </div>
    </div>
  )
}

export default Fliter