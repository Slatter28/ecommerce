import React from 'react'
import ProductPurchase from './ProductPurchase';

import './styles/purchase.css'

const PurchaseCard = ({ purchase }) => {

    let date = new Date(purchase.createdAt );
    return (
        <article className='card-purchase'>
            <h3 className='card-purchase__date'>{date.toDateString() } </h3>
            <div className='card-purchase__body'>
            {
                purchase.cart.products.map(product=>(
                    <ProductPurchase
                    key={product.id}
                    product={product}
                    />
                ))
            }
            </div>
        </article>
    )
}

export default PurchaseCard