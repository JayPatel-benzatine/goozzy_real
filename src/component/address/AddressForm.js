import React, { useEffect, useState } from 'react'
import './address.css'
import { Country, State, City } from 'country-state-city';

const AddressForm = ({statesClose}) => {
    const [countryCode, setCountryCode] = useState([])
    const [stateCode, setStateCode] = useState([])
    const [comman, setComman] = useState([])
     
    const S_country = Country.getAllCountries()
    const S_state = State.getStatesOfCountry(countryCode)
    const S_city = City.getCitiesOfState(countryCode, stateCode)
    // console.log(S_country);

    useEffect(() => {

      if (comman.length > 1) setCountryCode(comman)
// eslint-disable-next-line
    }, [comman, countryCode])

    const Get_country = (e) => {
        setComman('')
        setCountryCode(e.target.value)
      
    }
    const Get_state = (e) => {
        setStateCode(e.target.value)
    }

    const get_code = (e) => {
        setComman(e.target.value)
    }
   
    const cancelForm = () => {
        console.log('k');
    }
    const submitForm = (e) => {
        e.preventDefault();

    }

    return (
        <>
            <div className="label_heading ms-3 me-3 ">
                <h5>Please enter your address carefully. It will be used htmlFor delivery.</h5>
            </div>
            <form onSubmit={submitForm} className="ms-1 me-1 g-3">
                <div className="row form-row mb-3">
                    <div className="col-md-5 forms_field ">
                        <label htmlFor="inputAname" className="form-label">Full Name</label>
                        <span className="text-danger">*</span>
                        <input type="text" placeholder='Enter Full Name' className="form-control" id="inputAname" />
                    </div>
                    <div className="col-md-3 forms_field">
                        <label htmlFor="inputselectstate" className="form-label">Country Code</label>
                        <select className="col-md-4 forms_field  form-select" onChange={get_code} id="inputselectstate">
                            <option value="">--Select--</option>
                            {
                                S_country.map((elm) => (
                                    <option key={elm.isoCode} value={elm.isoCode}>{elm.name}(+{elm.phonecode}) </option>
                                ))
                            }
                        </select></div>
                    <div className="col-md-4 forms_field">
                        <label htmlFor="inputAphone" className="form-label">Phone Number</label>
                        <span className="text-danger">*</span>
                        <input type="number" placeholder='Enter Phone Number' className="form-control" id="inputAphone" />
                    </div>


                </div>
                <div className="row form-row mb-3">
                    <div className="col-md-3 forms_field ">
                        <label htmlFor="inputAhouse" className="form-label">House's No.</label>
                        <span className="text-danger">*</span>
                        <input type="text" placeholder='Enter House No.' className="form-control" id="inputAhouse" />
                    </div>
                    <div className="col-md-6 forms_field ">
                        <label htmlFor="inputAstreet" className="form-label">Street Address</label>
                        <span className="text-danger">*</span>
                        <input type="text" placeholder='Enter Street Address' className="form-control" id="inputAstreet" />
                    </div>
                    <div className="col-md-3 forms_field ">
                        <label htmlFor="inputALandmark" className="form-label">Landmark</label>
                        <span className="text-danger">*</span>
                        <input type="text" placeholder='Enter Landmark' className="form-control" id="inputALandmark" />
                    </div>


                </div>
                <div className="row mb-3">
                    <div className="col-md-3 forms_field ">
                        <label htmlFor="inputselectstate" className="form-label">Country</label>
                        <select className="col-md-4 forms_field  form-select" onChange={Get_country} id="inputselectstate">
                            <option value="">--Select Country--</option>
                            {
                                S_country.map((elm) => (
                                    <option key={elm.isoCode} value={elm.isoCode}>{elm.name} </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-md-3 forms_field ">
                        <label htmlFor="inputselectstate" className="form-label">State</label>
                        <select className="col-md-4 forms_field  form-select" onChange={Get_state} id="inputselectstate">
                            <option value="">--Select state--</option>
                            {
                                S_state.map((elm, i) => (
                                    <option key={i} value={elm.isoCode}>{elm.name} </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-md-3 forms_field ">
                        <label htmlFor="inputselectstate" className="form-label">City</label>
                        <select className="col-md-4 forms_field  form-select" id="inputselectstate">
                            <option value="">--Select city--</option>
                            {
                                S_city.map((elm, i) => (
                                    <option key={i} value={elm.isoCode}>{elm.name} </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-md-3 forms_field ">
                        <label htmlFor="inputPin" className="form-label">Pin Code</label>
                        <input type="number" className="form-control" id="inputPin" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="form-check f_field">
                        <label htmlFor="inputAname" className="form-label">Type</label>
                        <span className="text-danger">*</span>
                        <div className="d-flex">
                            <div className="form-check ">
                                <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" />
                                <label className="form-check-label" htmlFor="radio1">Home</label>
                            </div>
                            <div className="form-check ms-3">
                                <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2" />
                                <label className="form-check-label" htmlFor="radio2">Work</label>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row mb-3">
                    <div className="form-check ">
                        <input className="form-check-input ms-0" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label ms-2" htmlFor="flexCheckChecked">
                            Make This Address A Default Address
                        </label>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="col-3 ">
                        <button type="submit" className="btn f_btn">submit</button>
                    </div>
                    <div className="col-6 ">
                        <button type="submit" className="btn f_btn"
                            onClick={statesClose}
                        >cancel</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddressForm