import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllCarts } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './styles/productDescription.css'
const ProductInfo = ({ productInfo }) => {

    const [counter, setCounter] = useState(1)
    const dispatch = useDispatch()
    const handlePlus = () => setCounter(counter + 1)
    const handleMinus = () => {
        if (counter - 1 >= 1) {
            setCounter(counter - 1)
        }
    }

    const handleAddCart=e=>{
        // e.stopPropagation()
        const URL ='https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        const obj = {
            id : productInfo?.id,
            quantity : counter
        }
        axios.post(URL,obj,getConfig())
        .then(res=>{
            dispatch(getAllCarts())
            console.log(res);
        })
        .catch(err=>console.log(err))
    }

    return (
        <section className='product-info'>
            <h2 className='product-info__name'>{productInfo?.title}</h2>
            <p className='product-info__description'>{productInfo?.description}</p>
            <div className='product-info__body'>
                <article className='product-info__price'>
                    <h3 className='product-info__price-label'>Price</h3>
                    <span className='product-info__price-value'>{productInfo?.price}</span>
                </article>
                <article className='product-info__quantity'>
                    <h3 className='product-info__quantity-label'>Quantity</h3>
                    <div className='product-info__quantity-product'>
                        <button className='product-info__quantity-form' onClick={handleMinus}>-</button>
                        <div className='product-info__quantity-form'>{counter}</div>
                        <button className='product-info__quantity-form' onClick={handlePlus}>+</button>
                    </div>
                </article>
            </div>
            <button onClick={handleAddCart} className='product-info__btn-cart'>Add to cart </button>
        </section>
    )
}

export default ProductInfo
