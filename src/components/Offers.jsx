import React, { useEffect, useState } from 'react'

export default function Offers() {

    const offerdate= new Date ("2026-01-26T23:59:59").getTime()

    const[timeleft,setTimeleft]=useState("");

    useEffect(()=>{
        const timer=setInterval(()=>{
            const now=new Date().getTime()
            const diff=offerdate - now

            if(diff<=0){
                setTimeleft("Offer Expired")
                clearInterval(timer)
                return;
            }
             const days =Math.floor(diff/(1000*60*60*24))
             const hours= Math.floor((diff/(1000*60*60))%24)
             const minitues=Math.floor((diff/(1000*60))%60)
             const seconds=Math.floor((diff/1000)%60)
             setTimeleft(
               `${days}d: ${hours}h: ${minitues}m: ${seconds}s` 
             )
        },1000)
        return()=>clearInterval(timer)
    },[])
  return (
    <div className='text-center bg-yellow-500 static'>
         Celebrate Republic Day with Shopping | Get 20% OFF on All Items – Hurry, Limited Products! |  {timeleft}
    </div>
  )
}
