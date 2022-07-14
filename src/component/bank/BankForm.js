import React from 'react'
import './bank.css'

const BankForm = () => {
  return (
    <>
        <div className='container mt-4 mb-5 '>
            <form className="row g-3">
                <div className="col-md-6 f_field">
                    <label htmlFor="inputBnumber" className="form-label">Account Number<span className=' text-danger'>*</span></label>
                    <input type="number" placeholder='Enter Account Number' className="form-control" id="inputBnumber" required/>
                </div>
                <div className="col-md-6 f_field">
                    <label htmlFor="inputBname" className="form-label">Account Houlder's Name<span className=' text-danger'>*</span></label>
                    <input type="text" placeholder='Enter Account Houlder Name' className="form-control" id="inputBname" required/>
                </div>

                <div className="col-md-6 f_field">
                    <label htmlFor="inputBcode" className="form-label">IFSC Code<span className=' text-danger'>*</span></label>
                    <input type="text" placeholder='Enter IFSC Code' className="form-control" id="inputBcode" />
                </div>
                <div className="col-md-6 f_field">
                    <label htmlFor="inputBfile" className="form-label">Add Passbook Or Cheque Photo<span className=' text-danger'>*</span></label>
                    <input type='file' className="form-control" id="inputBfile" />
                </div>

                <div className=" text-center">
                    <button type="submit" className="btn f_btn">save</button>
                </div>
            </form> </div>
    </>
  )
}

export default BankForm