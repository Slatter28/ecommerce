import React from 'react'

const ProductPurchase = ({ product }) => {

  return (
    <li className='card-purchase__item'>
      <h4 className='card-purchase__name'>{product.title}</h4>
      <div className='card-purchase-footer'>
        <span className='card-purchase__quantity'>{product.productsInCart.quantity}</span>
        <span className='card-purchase__price'>{product.price}</span>
      </div>

    </li>
  )
}

export default ProductPurchase