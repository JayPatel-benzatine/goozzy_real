import React, { useEffect, useState } from 'react'
import './Carousel.css'
import { SliderList } from '../../Atom/Atom'
import { SliderLists } from '../../Atom/Selector'
import { useRecoilState, useRecoilValue } from 'recoil';
const Carousel = () => {
    const Slider_List = useRecoilValue(SliderLists)
    const [slideData, setSlideData] = useRecoilState(SliderList)
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        setSlideData([Slider_List])
        // eslint-disable-next-line 
    }, [])
    // console.log(slideData);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                    {
                        slideData.map((elm,i) => {
                            return (<>
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="2000">
                                        <img src={elm[0].image} class="d-block w-100" alt="..." />
                                        <div className="carousel-caption ">
                                            <h4>Welcome To Fashion</h4>
                                            <h1>{elm[0].name}</h1>
                                            <button type="button" className="btn btn-primary btn_shop">Shop Now </button>
                                        </div>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                    <img src={elm[1].image} class="d-block w-100" alt="..." />
                                        <div className="carousel-caption ">
                                            <h4>Welcome To Fashion</h4>
                                            <h1>{elm[1].name}</h1>
                                            <button type="button" className="btn btn-primary btn_shop">Shop Now </button>
                                        </div>                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                    <img src={elm[2].image} class="d-block w-100" alt="..." />
                                        <div className="carousel-caption ">
                                            <h4>Welcome To Fashion</h4>
                                            <h1>{elm[2].name}</h1>
                                            <button type="button" className="btn btn-primary btn_shop">Shop Now </button>
                                        </div>                                    </div>
                                </div>
                            </>)
                        })
                    }
                </div>
                <button className={isHovering ? "carousel-control-prev animate__animated animate__fadeInLeft animate__faster" : 'd-none'} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className={isHovering ? "carousel-control-next animate__animated animate__fadeInRight animate__faster" : 'd-none'} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel