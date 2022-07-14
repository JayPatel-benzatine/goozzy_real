import React from 'react'
import './Cards.css'
import { categoreyList } from '../../Atom/Atom'
import { useRecoilValue } from 'recoil'
const Cards = () => {
    const Category_data = useRecoilValue(categoreyList)
    return (
        <>
            <div className="h_cards">
                {
                    Category_data.map((elm) => {
                        return (
                            <>
                                <div className="category-banner" key={elm.id}>
                                    <div>
                                        <img alt="" className="img-fluid" src={elm.image} />
                                    </div>
                                    <div className="category-box">
                                        <a href="#"> <h2>{elm.name}</h2>  </a>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
         

            <div className="h_card">
                <div className="category-ban">
                    <div>
                        <a href="#"><img alt="" className="img-fluids" src={require('../../assets/card4.jpeg')} /> </a>
                    </div>
                    <div className="category-boxs">
                        <h6>SAVE 30%</h6>
                        <h3>FOOTWEAR</h3>
                    </div>
                </div>

                <div className="category-ban">
                    <div>
                        <a href="#"><img alt="" className="img-fluids" src={require('../../assets/card5.jpeg')} />  </a>
                    </div>
                    <div className="category-boxs">
                        <h6>SAVE 50%</h6>
                        <h3>WATCHES</h3>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cards