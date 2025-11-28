import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addtocart } from '../CartStore/Productsslice';
import { useNavigate } from 'react-router-dom';
export default function CardAll({ item }) {
    const imageSrc = item.heroImage
        ? `/src/${item.heroImage}`
        : `/src/${item.images?.[0]}`;
        const dispatch=useDispatch()
        const navigate=useNavigate("/cartpage")
        const [added,setAdded]=useState(false)
        const [showalret,setShowalret]=useState(false)
        const handleAdded=()=>{
            dispatch(addtocart(item))
            setAdded(true)
            setShowalret(true)
            setTimeout(()=>{
                setAdded(false)
                setShowalret(false)
            },1000)
        }

    return (
        <div className='justify-center mb-5'>
            <div className="card border w-[18rem] h-[420px] flex flex-col shadow-2xl">
                <img src={imageSrc} className="card-img-top" alt={item.title} />
                <div className="card-body ml-2 flex-col justify-between px-3 pb-3">
                    <div className='flex'>
                    <p className='text-red-500 flex'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                    </div>
                    <h5 className="card-title text-white">{item.title}</h5>
                    <p className="card-text text-white border-bottom mb-3 mt-3 h-[50px] overflow-hidden">{item.info}</p>
                    <p className='text-white'>  <del className='gap-2'>₹{item.originalPrice}</del>  <strong className=''>₹{item.finalPrice}</strong></p>
                    <div className='flex justify-center mt-3'>
                  <button  className={`align-middle text-white rounded select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 w-full 
                          ${added 
                         ? "bg-green-600 hover:bg-green-700"  
                         : "bg-red-500 hover:bg-red-600"
                          }
                          `}
                          type="button" onClick={handleAdded}>
                          {added?"Added ":"Add to cart"}
                          </button>
                        
                                
                    </div>
                </div>
            </div>
              {showalret&&(
                 <p className='fixed top-3 rounded justify-center bg-green-600 text-white text-center p-2 z-50 shadow-lg'>Product added to cart!</p>
              )}
        </div>
        
    )
}
