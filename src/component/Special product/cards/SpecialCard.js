import React, { useEffect, useState } from 'react'
import './SpecialCards.css';
import { useRecoilValue, useRecoilState } from 'recoil'
import { fetchUserData } from '../../../Atom/Selector'
import { specialProduct } from '../../../Atom/Atom'
import { filterProduct } from '../../../Atom/Atom'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
const SpecialCard = () => {
    const ProductDetails = useRecoilValue(fetchUserData);
    const [Productatom, setProductAtom] = useRecoilState(specialProduct);
    const [filteratom, setFilterAtom] = useRecoilState(filterProduct);
    const [isAnimate, setIsAnimate] = useState(true)

    useEffect(() => {
        setProductAtom(ProductDetails)

        const timer = setTimeout(() => {
            document.getElementById("jbtn").click();
        }, 200);
        return () => clearTimeout(timer);
        // eslint-disable-next-line 
    }, [Productatom])

    // console.log(Productatom);
    // console.log(filteratom);

    const handleproducts = () => {
        setFilterAtom(Productatom.products)
        setIsAnimate(!isAnimate)
    }

    const handlebestSelling = () => {
        const bs_data = Productatom.bestSelling
        setFilterAtom('')
        setFilterAtom(bs_data)
        setIsAnimate(!isAnimate)


    }
    const handlefeatured = () => {
        const f_data = Productatom.featured
        setFilterAtom('')
        setFilterAtom(f_data)
        setIsAnimate(!isAnimate)

    }
    const handleonsale = () => {
        const S_data = Productatom.onsale
        setFilterAtom('')
        setFilterAtom(S_data)
        setIsAnimate(!isAnimate)
    }

    return (
        <div className='container'>
            <div className="special_category">
                <ul className=' d-flex justify-content-center  navs  nav-pills'>
                    <li >
                        <button id='jbtn' className='category_btn'  onClick={() => handleproducts('products')} >new products </button>
                    </li>
                    <li>
                        <button className='category_btn' onClick={handlebestSelling}>best salers</button>
                    </li>
                    <li><button className='category_btn' id='btn_demo' onClick={handlefeatured}>featured products</button> </li>
                    <li><button className='category_btn' onClick={handleonsale}>on sale</button> </li>
                </ul>
                <div className="P_cards ">
                    {
                        (filteratom.length === 0) ? <h2>Loading</h2> :
                            filteratom.map((elm, i) => {
                                return (
                                    <>
                                        <div id='p_cards' className={isAnimate ? "cards w-100 img_wrapper animate__animated animate__zoomInLeft animate__faster "
                                         : 'animate__animated animate__zoomIn '  }>
                                            <div className="lable-block">
                                                <span className={elm.offerPrice ? "lable3 ng-star-inserted  " : 'd-none'}>Offer</span>
                                                <span className={elm.isonsale === '1' ? "lable4 ng-star-inserted  " : 'd-none'}>on sale</span>
                                            </div>
                                            <div className="front">
                                                <Link to="/productDetails" >
                                                    <img key={i} className="img-fluid lazy-loading  ng-star-inserted ng-lazyloaded"
                                                        src={elm.productImages[0].name} />
                                                </Link>
                                            </div>

                                            <div className="product-detail">
                                                <div>
                                                    <div className=" m-2 br-readonly ">

                                                        <StarBorderIcon />
                                                        <StarBorderIcon />
                                                        <StarBorderIcon />
                                                        <StarBorderIcon />
                                                        <StarBorderIcon />

                                                    </div>
                                                    <h5 className='m-2 text-capitalize fs-6 '>{elm.name}</h5>

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
                                            <div className="menus d-flex flex-column">
                                                <ShoppingCartOutlinedIcon className='cart_menu mb-2' />
                                                <FavoriteBorderIcon className='Fav_menu' />
                                            </div>
                                        </div>

                                    </>
                                )
                            })
                    }
                </div>


            </div>
        </div>
    )
}

export default SpecialCard