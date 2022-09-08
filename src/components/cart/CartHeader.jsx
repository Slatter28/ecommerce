import React from 'react'
import './style/CartHeader.css'
const CartHeader = ({product}) => {
    console.log(product);
    return (
        <div className='Cart__header'>
            {/* <div className='Cart__header-img'>
                <img src="" alt="aquí foto" />
            </div> */}
            <div className='Cart__header-category'>
                <h3>{product.brand}</h3>
            </div>
            <div className='Cart__header-description'>
                <h3 className='Cart__header-title'>{product.title}</h3>
                <div className='Cart__header-values'>
                    <h4>${product.price}</h4>
                    <span> x {product.productsInCart.quantity}</span>
                </div>
            </div>
        </div>
    )
}

export default CartHeader
