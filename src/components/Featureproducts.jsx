import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';
export default function Featureproducts({item}) {
       const imageSrc = item.heroImage
        ? `/src/${item.heroImage}`
        : `/src/${item.images?.[0]}`;
  return (
    <div>
          <div className='justify-center'>
                    <div class="card flex text-center mt-3 w-[16rem]">
                        <p class="card-title text-white mb-5 mt-3 text-opacity-50">{item.title}</p>
                         <Link to={`/productsdetails/${item.id}`}>  <img src={imageSrc} className="card-img-top" alt={item.title} class="card-img-top" /> </Link> 
                            <p className='text-white mt-5 text-opacity-75'>  <del className='gap-2'>₹{item.originalPrice}</del>  <strong className=''>₹{item.finalPrice}</strong></p>
                        
                    </div>
                </div>
    </div>
  )
}
