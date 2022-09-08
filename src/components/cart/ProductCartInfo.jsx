import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'

const ProductCartInfo = ({product,getAllProductsCart}) => {
    

    const handleDeleteProduct=()=>{

        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`

        axios.delete(URL,getConfig())
            .then(res=>getAllProductsCart())
            .catch(err=>console.log(err))
    }

    return (
        <article className='cart__item'>
            <header className='cart__item-header'>
                <h4 className='cart__category'>{product.brand}</h4>
                <h3 className='cart__name'>{product.title}</h3>
            </header>
            <i className="cart__trash fa-regular fa-trash-can"></i>
            <span className='cart__quantity'>{product.productsInCart.quantity}</span>
            <div>
                <button onClick={handleDeleteProduct}>Delete</button>
            </div>
            <footer className='cart__item-footer'>
                <span className='cart__total-label'>Total:</span>
                <p className='cart__total-number'>{product.price}</p>
            </footer>
        </article>

    )
}

export default ProductCartInfo