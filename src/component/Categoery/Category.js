import React, { useEffect, useState } from 'react'
import './CategoeryPage.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'

const Category = () => {
  const { id } = useParams();
  const [fe_data, setFe_data] = useState([])

  const f_data = async () => {
    try {
      const response = await axios.get(`http://ecommerceapi.benzatine.com/public/api/category_list/${id}`);
      return setFe_data(response.data.data);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    f_data();
    // eslint-disable-next-line
  }, [id])

  // console.log(fe_data);

  return (
    <div>

      {
        fe_data.map((elm, i) => {
          return (
            <>
              <div className='container cat_main' key={i}>
                <div className="cat_heading mt-5 text-center">
                  <h1 className='text-uppercase'>{elm.name}</h1>
                </div>
                <div className="C_cards mt-5 mb-5">
                  {
                    elm.subcates.map((ele, i) => {
                      return (<>
                        <div className="Categories_banner" key={i}>
                          <div>
                            <img alt="" className="imgs_fluid" src={ele.image} />
                          </div>
                          <div className="categories_box text-capitalize">
                            <Link to="#"> <h2>{ele.name}</h2>  </Link>
                          </div>
                        </div>
                      </>)
                    })
                  }

                </div>
              </div>
            </>
          )
        })
      }
    </div>
  )
}

export default Category