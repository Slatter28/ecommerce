import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import getConfig from '../../utils/getConfig';

const CardHome = ({ product }) => {

    // console.log(product);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

    const handleAddCart=e=>{
        e.stopPropagation()
        const URL ='https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        const obj = {
            id : product.id,
            quantity : 1
        }
        axios.post(URL,obj,getConfig())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    return (

        // <div onClick={handleClick} className="card">

        //     <div className="card__left">
        //         <img src={product.productImgs[0]} alt="mouse corsair" className="card_img" />
        //     </div>

        //     <div className="card__content">
        //         <h3 className='card__content-title'>{product.title}</h3>
        //         <h2 className="card__content-price">{product.price}$</h2>
        //         <a href="#" className="buy">Buy Now</a>
        //     </div>



        // </div>
        <div className="container" onClick={handleClick}>
            <div className="el-wrapper">
                <div className="box-up">
                    <div className='box-up__img'>
                        <img className="img" src={product.productImgs[0]} alt="x" />
                    </div>
                    <div className="img-info">
                        <div className="info-inner">
                            <span className="p-name">{product.title}</span>
                            <span className="p-company">{product.category.name}</span>
                        </div>
                        {/* <div className="a-size">{product.description}</div> */}
                    </div>
                </div>
                <div className="box-down">
                    <div className="h-bg">
                        <div className="h-bg-inner"></div>
                    </div>

                    <a className="cart" href="#" onClick={handleAddCart}>
                        <span className="price">${product.price}</span>
                        <span className="add-to-cart">
                            <span className="txt" >Add in cart</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default CardHome