import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import visa from "../../assets/images/icon/visa.png"
const SubFooter = () => {
    return (
        <>
            <div className="sub-footer">
                <div className="container">
                    <div className="row">
                        <div className="copywrite col-xl-6 col-md-6 col-sm-12">
                            <div className="footer-end">
                                <p><CopyrightIcon className='fa' /> 2022-23 powered by Benzatine
                                    </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <div className="payment-card-bottom">
                                <ul>
                                    <li>
                                        <a href="#"><img src={visa} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src={require('../../assets/images/icon/mastercard.png')} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src={require('../../assets/images/icon/paypal.png')} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src={require('../../assets/images/icon/american-express.png')} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src={require('../../assets/images/icon/discover.png')} alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubFooter