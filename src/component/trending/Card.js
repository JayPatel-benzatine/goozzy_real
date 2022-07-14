import React, { useEffect } from 'react'
import './Card.css'
import { TrendOfferList } from '../../Atom/Atom'
import { TrendOfferLists } from '../../Atom/Selector'
import { useRecoilState, useRecoilValue } from 'recoil'

const Card = () => {
    const tend_list = useRecoilValue(TrendOfferLists)
    const [trendData, setTrendData] = useRecoilState(TrendOfferList)

    useEffect(() => {
        setTrendData(tend_list)
    }, [])
    // console.log(trendData);
    return (
        <>
            <div className="h_cardss">
                {
                    trendData.map((elm) => {
                        return (<>
                            <div key={elm.id} className="category-bannerss">
                                <div>
                                    <img alt="" className="img-fluidss" src={elm.offer_image} />
                                </div>
                                <div className="category-boxss">
                                    <a href="#"> <h2 className=' d-flex flex-column align-items-center text-capitalize'>{elm.category_name}<span className='h_span'>{elm.offer_amount}% off</span></h2></a>
                                </div>
                            </div>
                        </>)
                    })
                }
            </div>


        </>
    )
}

export default Card