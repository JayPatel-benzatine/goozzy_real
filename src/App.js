import React from 'react'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import LogIn from './pages/LogIn'
import ContactUs from './pages/ContactUs'
import Profile from './pages/Profile'
import Bank from './pages/Bank'
import Address from './pages/Address'
import Notification from './pages/Notification'
import Categories from './pages/Categories';
import ProductsDetails from './pages/ProductsDetails'
import Shops from './pages/Shops'
const App = () => {
  return (
    <div className='app_main'>
    <Routes>
      <Route path='/'  element={<Home />}/>
      <Route path='/shop'  element={<Shops />}/>
      <Route path='/productDetails/:id'  element={<ProductsDetails />}/>
      <Route path='/category/:name/:id'  element={<Categories />}/>
      <Route path='/profile'  element={<Profile />}/>
      <Route path='/bank'  element={<Bank />}/>
      <Route path='/address'  element={<Address/>}/>
      <Route path='/notification'  element={<Notification />}/>
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/login' element={<LogIn />} />
    </Routes>
    </div>
  )
}

export default App