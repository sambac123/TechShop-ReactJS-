import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import productsData from '../contextApi/Products'
import ProductsDetails from '../components/ProductsDetails'
import Navbar from '../components/Navbar'
import AllProducts from '../components/AllProducts'
import Cartpage from '../components/Cartpage'
import Offers from '../components/Offers'
export default function Routing() {
  return (
    <div>
      <Offers/>
      <Navbar/>
        <Routes>
            <Route path='/' element ={<Header products={productsData} />}/>
            <Route path='/productsdetails/:id' element ={<ProductsDetails/>}/>
            <Route path='/allproducts' element ={<AllProducts/>}/>
            <Route path='/cart' element={<Cartpage/>}/>
        </Routes>
    </div>
  )
}
