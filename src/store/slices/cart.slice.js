import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";

const cartSlice = createSlice({
    name: 'carts',
    initialState: null,
    reducers: {
        setCart: (state, action) => action.payload
    }
})

export const { setCart } = cartSlice.actions

export default cartSlice.reducer

export const getAllCarts = () => (dispatch) => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    return axios.get(URL, getConfig())
        .then( res=> dispatch(setCart(res.data.data.cart.products)))
        .catch( err=>console.log('object'))
}


// const [cartProducts, setCartProducts] = useState()

// const getAllProductsCart = () => {
//     const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
//     axios.get(URL, getConfig())
//         .then(res => setCartProducts(res.data.data.cart.products))
//         .catch(err => setCartProducts())
// }