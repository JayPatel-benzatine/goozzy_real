import React from 'react'
import './Navtop.css'
import PhoneIcon from '@mui/icons-material/Phone';
import Search from './Search'
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
const NavTop = () => {
    return (
        <header className="top_header bg-light">
            <div className="container content">
                <div className="left">
                    <h6>Welecome to Our Gozzy Store</h6>
                    <p className='d-flex align-items-center '><PhoneIcon className='phone_icon' />Call Us : 123-4456-7890</p>
                </div>
                <div className="right d-flex align-items-center">
                    <Search />
                    <div className="nav-item dropdown">
                        <div className="user d-flex" data-toggle="dropdown">
                            <PersonIcon className='user_dp' />
                            <span>My Account</span>
                        </div>
                        <ul className="dropdown-menu fade-up">
                            <li><Link className="dropdown-item" to="#"> Log In</Link></li>
                        </ul>
                    </div>
                </div>


            </div>

        </header>
    )
}

export default NavTop