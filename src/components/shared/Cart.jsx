import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllCarts } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import ProductCartInfo from '../cart/ProductCartInfo'

const Cart = () => {
  

    const [cartProducts, setCartProducts] = useState()
    const [totalPrice, setTotalPrice] = useState()


    const dispatch = useDispatch()

    const navigate = useNavigate();
  
    const getAllProductsCart = () => {
      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
      axios.get(URL, getConfig())
        .then(res => {
          const products = res.data.data.cart.products
          setCartProducts(products)
          const total = products.reduce((acc,cv)=>{
            return Number(cv.price) * cv.productsInCart.quantity + acc
          },0)
          setTotalPrice(total);
        })
        .catch(err => setCartProducts())
    }
  
    useEffect(() => {
      getAllProductsCart()
    }, [])
  
    const handleCheckout = () => {
      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
      const obj = {
        street: "Green St. 1456",
        colony: "Southwest",
        zipCode: 12345,
        city: "USA",
        references: "Some references"
      }
      axios.post(URL, obj, getConfig())
        .then(res => {
          console.log(res.data)
          getAllProductsCart()
          setTotalPrice(0);
          dispatch(getAllCarts())
        })
        .catch(err => console.log(err))
    }
  
    return (
      <section className='carts'>
        <h2 className='carts__title'>Cart</h2>
        <div className='carts__container-item'>
          {
            cartProducts?.map(product => (
              <ProductCartInfo
                key={product.id}
                product={product}
                getAllProductsCart={getAllProductsCart}
              />
            ))
          }
        </div>
        <hr className='carts__hr' />
        <footer className='carts__footer'>
          <span className='carts__total-global-label'>Total:</span>
          <p className='carts__total-global-value'>{totalPrice}</p>
          <button onClick={handleCheckout} className='carts__btn'>Checkout</button>
        </footer>
      </section>
    )
  }
  
  export default Cart