import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../productDetail/ProductInfo'
import SimilarProducts from '../productDetail/SimilarProducts'
import Slider from '../productDetail/Slider'

const ProductDetail = () => {

  const [productInfo, setProductInfo] = useState()

  const { id } = useParams()

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`;
    axios.get(URL)
      .then(res => setProductInfo(res.data.data.product))
      .catch(err => console.log(err))

  }, [])

  // console.log(productInfo)
  return (
    <div className='product-detail'>

      <div className='product-detail-header'>

        <ProductInfo productInfo={productInfo} />
        <Slider productInfo={productInfo} />


      </div>
      <div className='product-detail-footer'>
        <h3 >Products Similars</h3>
        <SimilarProducts
          productInfo={productInfo}
        />
      </div>

    </div>
  )
}

export default ProductDetail