import React, { useEffect, useState } from 'react'
import productsData from '../contextApi/Products'
import { useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import "./Header.css"
import CardAll from './CardAll';
export default function ProductsDetails() {
  const {id}=useParams();
  const [Products,setProducts]=useState(null)
  useEffect(()=>{
    const productsDetails=productsData.find(item=>item.id===Number(id))
     setProducts(productsDetails)
  },[id])
    if (!Products) return <div>Loading...</div>;
  const images=Products.images;
  console.log("product",Products)
  const relatedfilter=productsData.filter(item=>item.category=== Products.category&&item.id!==productsData.id)
  console.log("relatedfilter",relatedfilter)
  return (
    <>
    <div className='detailspage py-20 px-34 '>
      <div className='row mr-0'>
      <div className='side  col-md-1 d-flex flex-column align-items-center gap-5 py-4 '>
         <img src={Products.images[0]} alt="" className='sideimage mb-3 ml-5' />
        <img src={Products.images[1]} alt="" className='sideimage mb-3 ml-5' />
        <img src={Products.images[2]} alt="" className='sideimage mb-3 ml-5' />
        <img src={Products.images[3]} alt="" className='sideimage mb-3 ml-5' />
      </div>
      <div className='col-md-5 originalimage '>
         <img src={Products.images[0]} alt="" className='mainimage' />
      </div>
        <div className='col-md-6 mt-5 text-white '>
          <h4>{Products.title}</h4>
          <p>{Products.info}</p>
          <div className='border-bottom py-1 text-center gap-4'>
          <p className='d-flex text-danger'>★★★★★||{Products.ratings}</p></div>
          <div>
          <h4 className='text-white py-2'> <strong className='text-bold'>₹{Products.finalPrice}</strong> <del className='gap-2 opacity-50'>₹{Products.originalPrice}</del> </h4>
          <p className='text-green-500'>You Save:₹{Products.originalPrice-Products.finalPrice}(
            {Math.round((Products.originalPrice-Products.finalPrice)/Products.originalPrice)*33})%Off  <button className='border rounded text-white bg-green-500 px-3'>In Stock</button></p>
            <p className='border-bottom py-1'>(Inclusive of all taxes)</p>
            </div>
            <p>Offers and Discounts</p>
            <div class="offers d-flex flex-wrap border-bottom py-1   text-center gap-4">
          <button class="btn btn-outline-light btn-sm mb-4 justify-content-between">No Cost EMI on Credit Card</button>
          <button class="btn btn-outline-light btn-sm mb-4 ">Pay Later & Avail Cashback</button>
        </div>
        <div className='py-5'>
         <button className='border-red bg-red-500 px-5 p-2 rounded'>Add to Cart</button>
        </div>
        </div>
      </div>
      <ul className='flex justify-center gap-20 text-white font-bold'>
        <li className='border bg-red-500 rounded text-white p-2'>Specifications</li>
        <li>Overview</li>
        <li>Reviews</li>
      </ul>
          <div class="container mt-5 text-white">
            <div class="row spec-row ms-2">
                <div class="col-md-3 spec-label">Brand</div>
                <div class="col-md-9">{Products.brand}</div>
            </div>
            <div class="row spec-row ms-2">
                <div class="col-md-3 spec-label">Model</div>
                <div class="col-md-9">{Products.title}</div>
            </div>
            <div class="row spec-row ms-2">
                <div class="col-md-3 spec-label">Genaric Name</div>
                <div class="col-md-9">{Products.category}</div>
            </div>
            <div class="row spec-row ms-2">
                <div class="col-md-3 spec-label">Heaphone-Type</div>
                <div class="col-md-9">{Products.type}</div>
            </div>
            <div class="row spec-row ms-2">
                <div class="col-md-3 spec-label">Connectivity</div>
                <div class="col-md-9">{Products.connectivity}</div>
            </div>
            <div class="row spec-row ms-2">
                <div class="col-md-3 spec-label">Micro Phone</div>
                <div class="col-md-9">Yes</div>
            </div>
          <h2 className='text-white text-center Feature'>Related Products</h2>
         </div >
         <div className='grid grid-cols-4 mt-5 gap-2 justify-items-center'>
         {relatedfilter.map((item,index)=><div><CardAll item={item}/></div>)}
         </div>
      </div>
    
      
        

      
    </>
  );
}
