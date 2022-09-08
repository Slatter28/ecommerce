import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, NavLink } from 'react-router-dom'
import { getAllCarts } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import CartHeader from '../cart/CartHeader'
const Header = () => {

    // const [cartProducts, setCartProducts] = useState()

    // const getAllProductsCart = () => {
    //     const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    //     axios.get(URL, getConfig())
    //         .then(res => setCartProducts(res.data.data.cart.products))
    //         .catch(err => setCartProducts())
    // }

    const dispatch = useDispatch()

    useEffect(() => {

      dispatch(getAllCarts())
    }, [])
  
    const cart = useSelector(state => state.cart)
    console.log(cart);

    // useEffect(() => {
    //     getAllProductsCart()
    // }, [])

    return (
        <header className="header">
            <nav className="header__nav">
                <div className="navbar-container container">
                    <input type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="header__list">
                        <li className="header__item">
                            <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to="/login">
                                Login
                            </NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to="/purchases">
                                Purchases
                            </NavLink>
                        </li>
                        <li className="header__item dropdown">
                            {/* <NavLink to="/cart">
                                <h2 className="header__link">Cart</h2>
                            </NavLink> */}
                            <h2 className="header__link">Cart</h2>
                            <div className='dropdown-content'>
                                <div className='dropdown-content-header'>
                                    <h3>Your Order</h3>
                                </div>
                                <div>
                                    {
                                        cart?.map(product => (
                                            <CartHeader
                                                key={product.id}
                                                product={product}
                                                // getAllProductsCart={getAllProductsCart}
                                            />
                                        ))
                                    }
                                </div>
                                <div className='dropdown-content-footer'>
                                    <button className="button-24" >
                                    <NavLink to="/cart">
                                        <h2 className="header__link">Checkout</h2>
                                    </NavLink>
                                    </button>
                                   
                                </div>

                            </div>
                        </li>
                        {/* <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#food">Category</a></li>
                        <li><a href="#food-menu">Menu</a></li>
                        <li><a href="#testimonials">Testimonial</a></li>
                        <li><a href="#contact">Contact</a></li> */}
                    </ul>
                    {/* <h1 class="logo">RS</h1> */}
                    <NavLink to="/">
                        <h1 className="logo">e-commerce RM</h1>
                    </NavLink>
                </div>
            </nav>

        </header>
    )
}

export default Header
