import { useEffect, useState } from 'react'
import { Routes, NavLink, Route } from 'react-router-dom'

import './App.css'
import './components/shared/styles/style.css'
import Home from './components/routes/Home'
import Logins from './components/routes/Logins'
import ProductDetail from './components/routes/ProductDetail'
import Purchases from './components/routes/Purchases'
import Header from './components/shared/Header'
import axios from 'axios'
import Cart from './components/shared/Cart'
import ProtectedRoutes from './components/routes/ProtectedRoutes'

function App() {

  // useEffect(() => {
  //   const URL ='https://ecommerce-api-react.herokuapp.com/api/v1/users'
  //   const obj = {
  //     firstName : 'Roger',
  //     lastName : 'Matamoros',
  //     email:'rsmatamoros16@gmail.com',
  //     password : 'pass1234',
  //     phone: '0995672992',
  //     role: 'admin'
  //   }
  //     axios.post(URL,obj)
  //       .then(res=>console.log(res.data))
  //       .catch(err=>console.log(err))
  // }, [])


  //   user:
  // email: "rsmatamoros16@gmail.com"
  // firstName: "Roger"
  // id: 417
  // lastName: "Matamoros"
  // phone: "0995672992"
  // role: "admin"
  // status: "available"

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Logins />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/cart' element={<Cart />} />
        </Route>

        <Route path='/product/:id' element={<ProductDetail />} />

      </Routes>
    </div>
  )
}

export default App
