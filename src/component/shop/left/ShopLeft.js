import React from 'react'
import './shopleft.css'
import { useRecoilValue, useRecoilState } from 'recoil';
import { ShopCategoryLists } from '../../../Atom/Selector'
import { headerList } from '../../../Atom/Atom'

const ShopLeft = () => {
    const [atomHandle, setAtomHandle] = useRecoilState(headerList);
    const ShopsCategoryLists = useRecoilValue(ShopCategoryLists);

    // console.log(ShopsCategoryLists);
    console.log(atomHandle);

    const resetFilter = () => {
        setAtomHandle({ priceRang1: '0', priceRang2: '5000' })
    }
    const headHandle = (id) => {
        // console.log(id);
        setAtomHandle({...atomHandle,category_id:id})
    }
    const subheadHandle = (ids) => {
        // console.log(ids)
        setAtomHandle({...atomHandle,category_id : ids})
    }
    const SubHeadHandle = (ids) => {
        // console.log(ids)
        setAtomHandle({ priceRang1: '0', priceRang2: '5000',category_id : ids})
    }

    return ( 
        <>
            <div className="rest_filter ">
                <button className='f_btn p-2 fs-6' onClick={resetFilter}>reset filter</button>
            </div>

            <div className="filter_category mt-4 mb-4">
                <div className="accordion">
                    <div className="accordion-item mb-4">
                        <h2 className="accordion-header" >
                            <button className="accordion-button text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                category
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show pb-3" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body  scrollbar-frozen-dreams">
                                <ul className='list-unstyled text-capitalize fs-5 '>
                                    {
                                        ShopsCategoryLists.map((elm, i) => {
                                            return (
                                                <>
                                                    <li >
                                                        <span onClick={()=> headHandle(elm.id)} className='list_head' key={i}>{elm.name}</span>
                                                        <ul className=' list-unstyled ps-3 mt-1 fs-5'>
                                                            <li className='ps-1'>
                                                                {
                                                                    elm.subcat.map((elem, j) => {
                                                                        return (
                                                                            <>
                                                                                <span key={j} onClick={()=> subheadHandle(elem.id)} className='sublist_head text-muted fw-bolder'> {elem.name}</span>
                                                                                <ul className=' list-unstyled ps-2 pt-1  fs-6'>
                                                                                    {
                                                                                        elem.subcat.map((elsd, k) => {
                                                                                            return (
                                                                                                <>
                                                                                                    <li key={k} className='p-1 text-muted'><span className='subSubHead' onClick={()=> SubHeadHandle(elsd.id)}>{elsd.name}</span></li>
                                                                                                </>
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </ul>
                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </>
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ShopLeft