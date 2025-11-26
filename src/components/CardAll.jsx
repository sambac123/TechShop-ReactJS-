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
        const handleAdded=()=>{
            dispatch(addtocart(item))
            setAdded(true)
            setTimeout(()=>{
                setAdded(false)
            },3000)
        }

    return (
        <div className='justify-center mb-5'>
            <div className="card border w-[18rem] h-[420px] flex flex-col">
                <img src={imageSrc} className="card-img-top" alt={item.title} />
                <div className="card-body ml-2 flex-col justify-between px-3 pb-3">
                    <div className='flex'>
                    <p className='text-red-500 flex'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                    </div>
                    <h5 className="card-title text-white">{item.title}</h5>
                    <p className="card-text text-white border-bottom mb-3 mt-3 h-[50px] overflow-hidden">{item.info}</p>
                    <p className='text-white'>  <del className='gap-2'>₹{item.originalPrice}</del>  <strong className=''>₹{item.finalPrice}</strong></p>
                    <div className='flex justify-center mt-3'>
                    <button className="align-middle bg-red-500 text-white rounded select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6  shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    type="button" onClick={handleAdded}>
                    {added?"Added":"Add to cart"}
                    </button>
                                
                    </div>
                </div>
            </div>
        </div>
        
    )
}
