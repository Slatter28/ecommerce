import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllCarts } from '../../store/slices/cart.slice';
import getConfig from '../../utils/getConfig';

const CardHome = ({ product }) => {


    const dispatch = useDispatch()

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
        .then(res=>{
            dispatch(getAllCarts())
            console.log(res);
        })
        .catch(err=>console.log(err))
    }

    return (

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