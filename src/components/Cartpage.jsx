import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Header.css"
import { deleteitem, updateqty } from '../CartStore/Productsslice'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
export default function Cartpage() {
    const data= useSelector((state)=>(state.cart.cartItem))
    console.log("data",data)
    const dispatch=useDispatch();
    const handleQty=(id,type)=>{
        dispatch(updateqty({id,type}))
    }
    const handleDelete=(id)=>{
    dispatch(deleteitem(id))
   }
    const originalprice=data.reduce((total,item)=>total+item.originalPrice*item.qty,0)
    const finalprice=data.reduce((total,item)=>total+item.finalPrice*item.qty,0)
    const discount=originalprice-finalprice
   
  return (
    <div className='py-44 reletive z-0 body'>
        <div className='flex gap-44'>
        {data.length>0?(
            <>
             <div className="h-[400px] w-[650px] overflow-y-auto pr-2 ml-8 sidescroll">
             {data.map((item, index) => {
             const imageSrc = item.heroImage
             ? `/src/${item.heroImage}`
             : `/src/${item.images?.[0]}`;

        return (
            <div className="flex border-b p-8">
                <img className="cartimage" src={imageSrc} />
                
                <div className="relative w-full pl-16">
                    <div className="absolute top-0 right-0 z-50">
                        <MdDelete onClick={()=>handleDelete(item.id)}  className='text-orange-700 cursor-pointer'/>
                    </div>

                    <p className='opacity-75 font-bold'>{item.info}</p>
                    <p>{item.category}</p>

                    <p>
                        <del>₹{item.originalPrice}</del> 
                        <strong> ₹{item.finalPrice}</strong>
                    </p>

                    <div className="flex gap-3 items-center mt-2 border w-24 bg-balck rounded-lg">
                        <button onClick={() => handleQty(item.id, "incre")} className="px-2">+</button>
                        
                        <span className="text-red-500 font-bold text-lg bg-neutral-900 p-1">
                            {item.qty}
                        </span>

                        <button 
                          onClick={() => handleQty(item.id, "decre")}
                          disabled={item.qty <= 1}
                          className=""
                        >
                          -
                        </button>
                    </div>
                </div>

            </div>
            
        );
    })}
</div>
            </>
        ): <div className='w-full flex flex-col items-center justify-center text-white font-bold text-xl py-20'>
                        🛒 Your cart is empty...
                     <Link to="/allproducts"> <h4 className='hover:bg-red-500 text-white mt-5'>Continue Shoping...</h4> </Link>
                    </div>}
                    {data.length>0&&(
                        <div className='w-[300px] p-3 rounded-xl h-fit'>
                            <h4 className='text-xl text-white'>Order Summary({data.length}items)</h4>
                            <div className='flex justify-between py-2 text-white'>
                                <p>Original Price</p>
                                <p>-{originalprice}</p>
                            </div>
                             <div className='flex justify-between py-2 text-green-400'>
                                <p>Discount</p>
                                <p>-{discount}</p>
                            </div>
                            <div className='flex justify-between text-white'>
                                <p>Delivery</p>
                                <p>Free</p>
                            </div>
                            <hr className='border' />
                            <div className='text-white flex justify-between'>
                                <p>Total Price</p>
                                <p>{finalprice}</p>
                            </div>
                            <button className='bg-red-500 text-white p-2 rounded font-bold'>Checkout</button>
                        </div>
                    )}
                  
                    </div>
    </div>
  )
}
