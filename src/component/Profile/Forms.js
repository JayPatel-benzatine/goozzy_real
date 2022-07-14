import React, { useEffect, useState } from 'react'
import './forms.css'
import { Country, State, City } from 'country-state-city';

const Forms = () => {
    const [images, setImages] = useState([])
    const [imageURL, setImageURL] = useState([])
    const [countryCode, setCountryCode] = useState([])
    const [stateCode, setStateCode] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const S_country = Country.getAllCountries()
    const S_state = State.getStatesOfCountry(countryCode)
    const S_city = City.getCitiesOfState(countryCode, stateCode)


    useEffect(() => {
        if (images.length < 1) return;
        const newImageURL = [];
        images.forEach(image => newImageURL.push(URL.createObjectURL(image)))
        setImageURL(newImageURL);
    }, [images])

    const Get_country = (e) => {
        setCountryCode(e.target.value)
    }
    const Get_state = (e) => {
        setStateCode(e.target.value)
    }
    const onImageChange = (e) => {
        setImages([...e.target.files]);
        setIsLoading(true)
    }
    return (
        <div className='main_form'>
            <div className='container mb-5'>
                <div className=" d-flex mb-5 justify-content-center ">
                    <label for="photo-upload" class="custom-file-upload fas">
                        <div class="img-wrap img-upload">
                            {!isLoading ? <img src={require('../../assets/upl.png')} alt='error' /> :
                                imageURL.map(imgs => <img src={imgs} alt='error' />)
                            }
                        </div>
                        <input id="photo-upload" type="file" multiple accept='image/*' onChange={onImageChange} />

                    </label>
                </div>
                <form className="row ms-1 me-1 g-3">
                    <div className="col-md-4 forms_field ">
                        <label htmlFor="inputfname" className="form-label">Full Name</label>
                        <span class="text-danger">*</span>
                        <input type="text" className="form-control" id="inputfname" required />
                    </div>

                    <div className="col-md-4 forms_field ">
                        <label htmlFor="inputPone" className="form-label">Phone Number</label>
                        <input type="number" className="form-control" id="inputPhone" required />
                    </div>
                    <div className="col-md-4 forms_field ">
                        <label htmlFor="inputEmail4" className="form-label">Email ID</label>
                        <input type="email" className="form-control" id="inputEmail4" required />
                    </div>
                    <div className="col-md-4 forms_field ">
                        <label htmlFor="inputselect" className="form-label">Gender</label>
                        <select className="col-md-4 forms_field  form-select" id="inputselect">
                            <option selected></option>
                            <option value="1">Female</option>
                            <option value="2">Male</option>
                            <option value="3">Other</option>
                        </select>
                    </div>
                    <div className="col-md-4 forms_field ">
                        <label htmlFor="inputOccupation" className="form-label">Occupation</label>
                        <input type="text" className="form-control" id="inputOccupation" required />
                    </div>
                    <div className="col-md-4 forms_field ">
                        <label htmlFor="inputLanguage" className="form-label">Language Spoken</label>
                        <input type="text" className="form-control" id="inputLanguage" required />
                    </div>

                    <div className="col-md-4 forms_field ">
                        <label htmlFor="inputselectcountry" className="form-label">Country</label>
                        <select className="col-md-4 forms_field  form-select" onChange={Get_country} id="inputselectcountry">
                            <option value="">--Select Country--</option>
                            {
                                S_country.map((elm) => (
                                    <option key={elm.isoCode} value={elm.isoCode}>{elm.name} </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-md-4 forms_field ">
                        <label htmlFor="inputselectstate" className="form-label">State</label>
                        <select className="col-md-4 forms_field form-select" onChange={Get_state} id="inputselectstate">
                            <option value="">--Select state--</option>
                            {
                                S_state.map((elm, i) => (
                                    <option key={i} value={elm.isoCode}>{elm.name} </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-md-4 forms_field ">
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
                    <div className="col-md-4 forms_field ">
                        <label htmlFor="inputPin" className="form-label">Pin Code</label>
                        <input type="number" className="form-control" id="inputPin" required />
                    </div>
                    <div className="col-md-4 forms_field ">
                        <label htmlFor="inputdate" className="form-label">Date Of Birth</label>
                        <input type="date" className="form-control" id="inputdate" required />
                    </div>
                    <div className="col-md-4 forms_field ">
                        <label htmlFor="inputbname" className="form-label">Business Name</label>
                        <input type="text" className="form-control" id="inputbname" required />
                    </div>
                    <div className="col-12 ">
                        <button type="submit" className="btn f_btn">save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Forms