import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import boat131 from "../images/boat131-1.png"
import jbl from "../images/jbl660nc-1.png"
import sony from "../images/sonyXb910n-1.png"
import "../components/Header.css"
import productsData from '../contextApi/Products';
import CardAll from './CardAll';
import Featureproducts from './Featureproducts';

export default function Header({products}) {
console.log("productsData",productsData)
const [category,setCategory]=useState("All")
const filterproducts1=category==="All"?productsData:productsData.filter(item=>item.category===category);
const categories=["All","Headphones","Earbuds","Earphones","Neckbands"]
  const filterproducts= productsData.filter (item=>item.category==="Headphones")
  console.log("filterproducts",filterproducts)
  const filterEarbuds= productsData.filter (item=>item.category==="Earbuds")
  console.log("filterEarbuds",filterEarbuds)

  
   
  return (
    <>
    <div className='body pt-16'>
    <div >
    
{/* <!-- component --> */}

<div
  id="carouselExampleAutoplaying"
  className="carousel slide"
  data-bs-ride="carousel"
  data-bs-interval="3000"
>

  {/* Indicators */}
  <div className="carousel-indicators custom-indicators ">
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2"></button>
  </div>

  {/* Slides */}
  <div className="carousel-inner">

    {/* Slide 1 */}
    <div className="carousel-item active">
      <div className="container py-5 d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="text-center text-md-start text-white content">
          <h6>Sony WH-XB910N</h6>
          <h1>Give Your Favourite <br /> Music A Boost </h1>
          <p><strong>₹13,489</strong> <del>₹19,990</del></p>
          <Link to={`/productsdetails/7`} className="btn btn-danger">Shop Now</Link>
        </div>
        <img src={sony} alt="Sony" className="product-img" />
      </div>
    </div>

    {/* Slide 2 */}
    <div className="carousel-item">
      <div className="container py-5 d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="text-center text-md-start text-white content">
          <h6>boAt Airdopes 131</h6>
          <h1>Featherweight For<br /> Comfort All-Day.</h1>
          <p><strong>₹1,099</strong> <del>₹2,990</del></p>
          <Link to={`/productsdetails/3`} className="btn btn-danger">Shop Now</Link>
        </div>
        <img src={boat131} alt="boAt" className="product-img" />
      </div>
    </div>

    {/* Slide 3 */}
    <div className="carousel-item">
      <div className="container py-5 d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="text-center text-md-start text-white content">
          <h6>JBL Live 660NC</h6>
          <h1>Keep The Noise Out,<br /> Or In. You Choose.</h1>
          <p><strong>₹9,999</strong> <del>₹14,999</del></p>
          <Link to={`/productsdetails/1`} className="btn btn-danger">Shop Now</Link>
        </div>
        <img src={jbl} alt="JBL" className="product-img" />
      </div>
    </div>

  </div>

</div>
<h2 className='text-white text-center Feature mt-5 py-5 mb-4'>Feature Products</h2>

<div className="featured-slider">
  <div className="slider-track">
    {productsData
      .filter(item => item.tag === "featured-product")
      .map((item, index) => (
        <div key={index} className="slide-card">
          <Featureproducts item={item} />
        </div>
      ))}

    {/* Duplicate once for infinite loop */}
    {productsData
      .filter(item => item.tag === "featured-product")
      .map((item, index) => (
        <div key={"dup-" + index} className="slide-card">
          <Featureproducts item={item} />
        </div>
      ))}
  </div>
</div>


</div>
</div>
   <div className='top pt-3 '>
      {/* //Top Products// */}
      <h1 className='flex justify-center text-center text-white mt-5'>Top Products</h1>

      <ul className='flex text-white justify-center gap-12 mt-5 mb-5 font-bold'>
        {categories.map((cat, index) => (
          <li
            key={index}
            className={`cursor-pointer ${category === cat ? 'text-orange-500' : ''}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>

      <div className='grid grid-cols-4 justify-items-center gap-5'>
        {filterproducts1.slice(0,11).map((item, index) => (
          <div key={index}>
            <CardAll item={item} />
          </div>
        ))}
        <Link to="/allproducts">
  <div className='card allproductscard border w-[18rem] h-[420px]'>
    <div className='card-body flex flex-col items-center justify-center h-full text-white text-xl gap-3'>
      <p className=' text-opacity-50 hover:text-red-500'>Browse All ➜</p>
    </div>
  </div>
</Link>


        {/* Optional Browse All card */}
      
      </div>
    </div>


</>
  )
}
