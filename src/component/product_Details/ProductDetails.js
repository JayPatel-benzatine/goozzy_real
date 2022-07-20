import React, { useEffect, useState } from 'react'
import './Pdetails.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CircleIcon from '@mui/icons-material/Circle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '../Rating/Rating'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material';

const ProductDetails = () => {
  const [P_detail, setP_Detail] = useState([]);
  const [R_detail, setR_Detail] = useState([]);
  const [counter, setcounter] = useState(1)
  const { id } = useParams();

  const data_fetch = async () => {
    try {
      const response = await axios.get(`http://ecommerceapi.benzatine.com/public/api/product/${id}`);
      return setP_Detail([response.data.data]);
    } catch (error) {
      throw error;
    }
  }
  const R_fetch = async () => {
    try {
      const responses = await axios.get(`http://ecommerceapi.benzatine.com/public/api/productReviews/${id}`);
      return setR_Detail([responses.data.data]);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    data_fetch();
    R_fetch();
  }, [])


  console.log(P_detail);
  console.log(R_detail);
  return (
    <div className='container mt-5 mb-5'>
      {
        P_detail.map((elm, i) => {
          return (
            <>
              <div className="P_detail" key={i}>
                <div className="p_img">
                  <Carousel
                    showStatus={false}
                    showArrows={false}
                    showIndicators={false}
                    emulateTouch={true}
                    infiniteLoop={true}
                  >
                    {
                      elm.productImages.map((e) => {
                        return (
                          <>
                            <img src={e.name} />
                          </>
                        )
                      })
                    }
                  </Carousel>
                </div>
                <div className="P_Details">
                  <div className="detail_first">
                    <div className="first_head">
                      <h4 className='mb-0'>{elm.name}</h4>
                      <p className=' fw-light-50'>{elm.short_description}</p>
                      <h3 className='mb-0'>${elm.price}</h3>
                    </div>
                    <div className="p_color">
                      <p>
                        {
                          elm.colour.includes("[") ? (
                            JSON.parse(elm.colour).map((e) => {
                              return (
                                <>
                                  <CircleIcon style={{ color: `${e.name}`, border: '1px solid grey', borderRadius: '100%' }} />
                                </>
                              )
                            })
                          ) : (
                            <CircleIcon style={{ color: `${elm.colour}`, border: '1px solid grey', borderRadius: '100%' }} />
                          )
                        }
                      </p>
                    </div>
                    <hr className='m-2  ms-0' />
                  </div>
                  <div className="detail_second">
                    <h6 className='text-uppercase fw-light ps-0'>quantity</h6>
                    <div className="qty-box mt-1">
                      <div className="input_group d-flex  ">
                        <button type="button" className="quantity_minus" onClick={() => setcounter(counter - 1)}>
                          <ChevronLeftIcon />
                        </button>
                        <input type="text" value={counter} disabled className="input-number" />
                        <button type="button" className="quantity_plus" onClick={() => setcounter(counter + 1)}>
                          <ChevronRightIcon />
                        </button>
                      </div>
                    </div>
                    <div className="d-flex mt-3 input_btn">
                      <div className="me-3">
                        <button type="submit" className="btn f_btn pt-2 pb-2 ps-3 pe-3">add to cart</button>
                      </div>
                      <div className="me-3">
                        <button type="submit" className="btn f_btn pt-2 pb-2 ps-3 pe-3">wishlist</button>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                      <h6 className='fw-lighter text-capitalize ps-0'>select size</h6>
                      <h6 className='fw-lighter text-capitalize Detail_size' data-bs-toggle="modal" data-bs-target="#exampleModal">size chart</h6>
                      <div className="modal fade  animate__animated animate__zoomIn " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog  ">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <img src={require('../../assets/sz.jpeg')} className='Detail_img' alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product_size text-capitalize mt-1 mb-3 ms-0">
                      {
                        elm.size.includes("[") ? (
                          JSON.parse(elm.size).map((e, i) => {
                            return (
                              <>
                                <button className='pd_button'>{e.name}</button>
                              </>
                            )
                          })) : (
                          console.log('not array'),
                          <button className='pd_button'>{elm.size}</button>
                        )
                      }
                    </div>
                    <hr className='m-2  ms-0' />
                  </div>
                  <div className="detail_third">
                    <h6 className='text-uppercase fw-light ps-0'>product details</h6>
                    <div className="p_list ">
                      <ul className='list-unstyled mt-1'>
                        <li><span className='text-capitalize li_span'>material:</span> <span className='pd_span'>{elm.material}</span></li>
                        <li><span className='text-capitalize li_span'>pattern:</span> <span className='pd_span'>

                          {
                            elm.pattern.includes("[") ? (
                              JSON.parse(elm.pattern).map((e, i) => {
                                return (
                                  <>
                                    <button className='pd_button'>{e.name}</button>
                                  </>
                                )
                              })) : (
                              elm.pattern
                            )
                          }
                        </span></li>
                        <li><span className='text-capitalize li_span'>no. of comparment:</span> <span className='pd_span'>{elm.no_of_comparments}</span></li>
                        <li><span className='text-capitalize li_span'>multipack:</span> <span className='pd_span'>{elm.multipack}</span></li>
                        {/* <li><span className='text-capitalize li_span'>vendor:</span> <span className='pd_span'>shifon</span></li> */}
                        <li><span className='text-capitalize li_span'>country of origin:</span> <span className='pd_span'>{elm.country_of_origin}</span></li>
                      </ul>
                    </div>
                    <hr className='m-2  ms-0' />
                  </div>
                  <div className="detail_four mb-2 overflow-hidden">
                    <h6 className='text-capitalize fw-light ps-0'>share it</h6>
                    <div className="sublist d-flex ">
                      <div className="social_icons d-flex align-items-center me-2 border-end border-2">
                        <FacebookIcon className='me-2 p_icon fs-5' />
                        <GoogleIcon className='me-2 p_icon fs-5' />
                        <TwitterIcon className='me-2 p_icon fs-5' />
                        <InstagramIcon className='me-2 p_icon fs-5' />
                      </div>
                      <div className="wishlist d-flex align-items-center">
                        <FavoriteIcon className='p_icon fs-5 me-2' />
                        <span className=' text-capitalize'>add to wishlist</span>
                      </div>
                    </div>
                    <div className="librery  border-top border-bottom d-flex mt-3 mb-3">
                      <div className="freechash">
                        <img src={require('../../assets/ic1.png')} alt="" />
                        <h4>free cash on delivery</h4>
                      </div>
                      <div className="return">
                        <img src={require('../../assets/ic2.png')} alt="" />
                        <h4>7 day easy return</h4>
                      </div>
                      <div className="lowprice">
                        <img src={require('../../assets/ic3.png')} alt="" />
                        <h4>lowest price guaranteed</h4>
                      </div>
                    </div>
                  </div>
                  <div className="fifth">
                    <h6 className='text-capitalize fw-light ps-0'>catalog reviews</h6>
                    <div className="p_reviews d-flex justify-content-between">
                      <div className="rating">
                      <Typography className='text-center' component="legend">4/5</Typography>
                      <Rating />
                      </div>
                      <div className="p_progress w-50 ">
                        <table>
                          <tbody>
                            <tr>
                              <td className='text-capitalize list_first text-black-50 '>excellent</td>
                              <td className='w-100 list_progress ps-1 pe-1'><div className="progress" style={{ height: "5px" }}>
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '75%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                              </div></td>
                              <td className='list_number text-black-50 '>292</td>
                            </tr>

                            <tr>
                              <td className=' text-capitalize list_first text-black-50 '>very good</td>
                              <td className='w-100 list_progress ps-1 pe-1'><div className="progress" style={{ height: "5px" }}>
                                <div className="progress-bar " role="progressbar" style={{ width: '55%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                              </div></td>
                              <td className='list_number text-black-50 '>86</td>
                            </tr>

                            <tr>
                              <td className='text-capitalize list_first text-black-50 '>average</td>
                              <td className='w-100 list_progress ps-1 pe-1'><div className="progress" style={{ height: "5px" }}>
                                <div className="progress-bar " role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                              </div></td>
                              <td className='list_number text-black-50 '>20</td>
                            </tr>
                            <tr>
                              <td className='text-capitalize list_first text-black-50 '>good</td>
                              <td className='w-100 list_progress ps-1 pe-1'><div className="progress" style={{ height: "5px" }}>
                                <div className="progress-bar " role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                              </div></td>
                              <td className='list_number text-black-50 '>32</td>
                            </tr>
                            <tr>
                              <td className='text-capitalize list_first text-black-50 '>poor</td>
                              <td className='w-100 list_progress ps-1 pe-1'><div className="progress" style={{ height: "5px" }}>
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                              </div></td>
                              <td className='list_number text-black-50 '>38</td>
                            </tr>
                          </tbody>
                        </table>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })
      }


      {/* review section */}
      <div className="P_review">
        <div className="review_heading">
          <h6 className=' text-uppercase fw-light ps-0'>reviews</h6>
          <div className="revie_list">
            <ul className='comment-section list-unstyled mt-4'>
              {
                R_detail.map((elm) => {
                  return (
                    <>
                    {
                        elm.map((ele) => {
                          return (
                            <>
                              <li className=' pb-4'>
                                <div className="medias d-flex  justify-content-start ">
                                  <img src={ele.profile_image} alt="Profile" />
                                  <div className="media_body">
                                    <h6 className='ps-0 text-uppercase mb-2 fw-light' >{ele.name}
                                      <span className='reviw' style={{ color: "white" }} >
                                        {ele.rating}
                                        <StarIcon style={{ height: '10px', margin: ' 3px', width: '10px' }} />
                                      </span>
                                      <span >(  {ele.created_at} )</span>
                                    </h6>
                                    <p>{ele.comments}</p>
                                    <div className="mt-2">
                                    {
                                      ele.images.map((elemt)=>{
                                        return <img style={{ borderRadius: "10%" }} src={elemt}  className="ng-star-inserted" />
                                      })
                                    }
                                    </div>
                                    <ul class="comnt-sec list-unstyled mt-2">
                                      <li className='d-inline-block'>
                                        <a href="#">
                                          <ThumbUpOffAltIcon className='me-2' />
                                          <span>({ele.like_count})</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </>
                          )
                        })
                      }

                    </>
                  )
                })
              }

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails