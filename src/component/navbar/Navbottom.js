import React, { useEffect } from 'react'
import './Navbottom.css'
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link, NavLink } from 'react-router-dom'
import { useRecoilValue, useRecoilState } from 'recoil'
import { categoreyLists } from '../../Atom/Selector'
import { categoreyList } from '../../Atom/Atom'

const NavBottom = () => {
    const Categories_List = useRecoilValue(categoreyLists);
    const [category, setCategorey] = useRecoilState(categoreyList);

    useEffect(() => {
        setCategorey(Categories_List)
        // eslint-disable-next-line 
    }, [Categories_List])

    // console.log(category);

    return (
        <>
            <nav id="navbar_top" className="navbar navbar-expand-lg navbar-light navbar_top ">
                <div className="container">
                    <div className="left">
                        <div className="footer-logo"><img src={require('../../assets/images/Logo.png')} alt="Images" /></div>
                    </div>
                    <div className="right_cart">
                        <button className="navbar-toggler hamburger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNavDropdown">
                            <button className="navbar-toggler side_btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                BACK<ChevronRightIcon />
                            </button>
                            <hr className='mt-5' />

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink
                                        style={({ isActive }) => (isActive ? { color: '#7165e3' } : { color: 'grey' })}
                                        className="nav-link "
                                        aria-current="page"
                                        to="/">Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">SHOP</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
                                        CATAGORY
                                    </a>
                                    <ul className="dropdown-menu fade-up" >
                                        {
                                            category.map((elm) => {
                                                return (
                                                    <>
                                                        <li key={elm.id}><Link className="dropdown-item " to={`/category/${elm.name}/${elm.id}`}>{elm.name}</Link></li>
                                                    </>)
                                            })
                                        }
                                        </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
                                        ORDER
                                    </a>
                                    <ul className="dropdown-menu fade-up" >
                                        <li><a className="dropdown-item" href="#">CART</a></li>
                                        <li><a className="dropdown-item" href="#"> WISHLISTS</a></li>
                                        <li><a className="dropdown-item" href="#"> MY ORDER</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-link dropdown-toggle"
                                        to="#"
                                        id="navbarDropdownMenuLink"
                                        data-toggle="dropdown">
                                        ACCOUNT
                                    </Link>
                                    <ul className="dropdown-menu fade-up" >
                                        <li><Link className="dropdown-item" to="/profile">PROFILE</Link></li>
                                        <li><Link className="dropdown-item" to="/bank"> MY BANK-DETAILS</Link></li>
                                        <li><Link className="dropdown-item" to="/address"> MY ADDRESS</Link></li>
                                        <li><Link className="dropdown-item" to="/notification"> NOTIFICATIONS SETTINGS</Link></li>
                                    </ul>
                                </li>


                                <li className="nav-item">
                                    <NavLink
                                        style={({ isActive }) => (isActive ? { color: '#7165e3' } : { color: 'grey' })}
                                        className="nav-link"
                                        to="/about">ABOUT-US
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        style={({ isActive }) => (isActive ? { color: '#7165e3' } : { color: 'grey' })}
                                        className="nav-link"
                                        to="/contact">CONTACT</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-item dropdown d-flex mb-1">
                            <div className="delte d-flex align-items-center h-auto" data-toggle="dropdown">
                                <LocalGroceryStoreOutlinedIcon />
                                <span className="cart_qty_cls">0</span>
                            </div>
                            <ul className="dropdown-menu fade-up cart_ul">
                                <li><p className="dropdown-item"> Your cart is currently empty.</p></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </>

    )
}

export default NavBottom