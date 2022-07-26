import React, { useEffect, useState } from 'react'
import './cart.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";

const Carts = () => {
    const [carItem, setcartItem] = useState([])
    const { isEmpty, items, updateItemQuantity, removeItem, cartTotal } = useCart();
    const p = JSON.parse(localStorage.getItem('Price'));
    useEffect(() => {
        setcartItem(items)
        // eslint-disable-next-line 
    }, [isEmpty, items])

    return (
        <div>
            {
                !isEmpty ?
                    (<div className="cart_table">
                        <div className="table-responsive">
                            <table className="table mt-3">
                                <thead >
                                    <tr>
                                        <th style={{ borderBottomColor: 'grey' }} scope="col" className=' text-center text-uppercase fw-light'>image</th>
                                        <th style={{ borderBottomColor: 'grey' }} scope="col" className=' text-center text-uppercase fw-light'>product name</th>
                                        <th style={{ borderBottomColor: 'grey' }} scope="col" className=' text-center text-uppercase fw-light'>price</th>
                                        <th style={{ borderBottomColor: 'grey' }} scope="col" className=' text-center text-uppercase fw-light'>quantity</th>
                                        <th style={{ borderBottomColor: 'grey' }} scope="col" className=' text-center text-uppercase fw-light'>action</th>
                                        <th style={{ borderBottomColor: 'grey' }} scope="col" className=' text-center text-uppercase fw-light'>total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        carItem.map((elm, i) => {
                                            return (
                                                <>
                                                    <tr key={elm.id}>
                                                        <td className='text-center'>
                                                            <img src={elm.productImages[0].name} style={{ height: '100px', borderRadius: '15px' }} alt="" />
                                                        </td>
                                                        <td valign='middle' style={{ color: '#777777' }} className='text-uppercase text-center'>{elm.name}</td>
                                                        <td valign='middle' className='text-uppercase text-center'>
                                                            <div className="table_price d-flex flex-column">
                                                                {
                                                                    elm.offerPrice ?
                                                                        (<>
                                                                            <span style={{ color: '#777777' }} className={elm.offerPrice ? "fs-5  " : 'd-none'}> ${elm.offerPrice} </span>
                                                                            <del style={{ color: '#aaaaaa' }} className='ms-1 text-muted '>
                                                                                <div className="fs-6">{
                                                                                    p.map((element, i) => {
                                                                                        return (
                                                                                            <>
                                                                                                {
                                                                                                    (element.id === elm.id) ? element.price : ''
                                                                                                }
                                                                                            </>
                                                                                        )
                                                                                    })
                                                                                }
                                                                                </div>
                                                                            </del>
                                                                        </>

                                                                        ) : (
                                                                            <>
                                                                                <div style={{ color: '#777777' }} className="fs-5"> ${elm.price} </div>
                                                                            </>

                                                                        )
                                                                }
                                                            </div>
                                                        </td>
                                                        <td valign='middle' className=''>
                                                            <div className="input_group d-flex justify-content-center">
                                                                <button type="button" className="quantity_minus" onClick={() => updateItemQuantity(elm.id, elm.quantity - 1)}>
                                                                    <ChevronLeftIcon />
                                                                </button>
                                                                <input type="text" value={elm.quantity} disabled className="input-number" />
                                                                <button type="button" className="quantity_plus" onClick={() => updateItemQuantity(elm.id, elm.quantity + 1)}>
                                                                    <ChevronRightIcon />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td valign='middle' className='text-uppercase text-center' style={{ color: 'grey', cursor: 'pointer' }}><DeleteOutlineIcon onClick={() => removeItem(elm.id)} /></td>
                                                        <td valign='middle' className='text-uppercase text-center'>$ {elm.itemTotal}</td>
                                                    </tr>

                                                </>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>) : (
                        <h1>Empty cart</h1>,
                        localStorage.removeItem('Price')
                        )
            }
            <div className="cart_total d-flex me-3 align-items-center justify-content-end">
                <span className=' text-capitalize '>total price :</span>
                <h4 className='mb-0 ms-2'><span className='text-capitalize'>$ {cartTotal}</span></h4>
            </div>
            <div className="cart_buttons m-3 d-flex justify-content-between">
                <Link to='/shop'> <button className='f_btn'>continue shopping</button></Link>
                <button className='f_btn'> check out</button>
            </div>
        </div>
    )
}

export default Carts