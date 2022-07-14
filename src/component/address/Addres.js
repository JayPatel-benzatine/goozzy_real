import React, { useEffect, useState } from 'react'
import './address.css'
import AddressForm from './AddressForm'

const Addres = () => {
    const [loading, setLoading] = useState(true)

    const openForm = () => {
        setLoading(false);
    }
   
    return (
        <div className='container address_main'>
            <div className="address_head text-center text-uppercase mt-5 mb-4 ">
                <h1>my address</h1>
            </div>
            <div className=" mb-5">
                <button type="submit" className="btn f_btn" onClick={openForm}>add new address</button>
            </div>
            <div  className={ loading ? ('add_form ms-2 me-2 mb-5 d-none') : ("add_form ms-2 me-2 mb-5")} >
                <AddressForm states={setLoading} />
            </div>
        </div>
    )
}

export default Addres