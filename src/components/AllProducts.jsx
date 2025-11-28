import React, { useEffect, useState } from 'react'
import productsData from '../contextApi/Products'
import "./Header.css"
import CardAll from './CardAll'
export default function AllProducts() {
  console.log("allproducts",productsData)
  const [selectbrands,setselectBrands]=useState([])
  const [filterbrands,setFilterbrands] =useState(productsData)
  const[sortby,setSortby]=useState("")
  const [category,setCategory]=useState([])
   const [value,setValue]=useState(15000)
   const resetfilter=()=>{
    setCategory([]),
    setFilterbrands(productsData),
    setselectBrands([]),
    setSortby(),
    setValue(15000)
   }
  const handleCategory=(cate)=>{
    setCategory((prev)=>prev.includes(cate)?prev.filter((c)=>c!==cate):[...prev,cate])
  }
  const handleBrand=(Brand)=>{
    setselectBrands((prev)=>prev.includes(Brand)?prev.filter((b)=>b!==Brand):[...prev,Brand])
  }
    useEffect(()=>{
      let result=[...productsData]
      if(selectbrands.length>0){
        result=result.filter(item=>selectbrands.includes(item.brand))
      }
      if(category.length>0){
        result=result.filter((item)=>category.includes(item.category))
      }
      if(sortby==="low"){
        result=result.sort((a,b)=>a.finalPrice-b.finalPrice)
      } 
      if(sortby==="high"){
        result=result.sort((a,b)=>b.finalPrice-a.finalPrice)
      }  
      if(sortby==="latest"){
        result.sort((a,b)=>b.id-a.id)
      }
      if(sortby==="top"){
        result.sort((a,b)=>b.ratings-a.ratings)
      }
      if(sortby==="featured"){
        result=result.filter((item)=>item.tag==="featured-product")
      }
      
        result=result.filter(item=>item.finalPrice<= value)
      
      setFilterbrands(result)
    },[selectbrands,category,sortby,value])
 

  return (
    <div className='py-20 text-white allproducts pt-24'>
      <div className='container-fluid'>
      <div className="row">
        <div className='col-md-2'>
           <div className='sidebar-scroll mt-5'>
           <button onClick={resetfilter} className='border bg-red-500 rounded shadow-2xl font-bold p-2 hover:bg-red-600 mb-2'>
            ClearFilters
           </button>
            <h4 className='font-bold' >Sort by</h4>
            <p className='sortby font-bold' onClick={()=>setSortby("latest")}>Latest</p>
            <p className='sortby font-bold' onClick={()=>setSortby("featured")}>Featured</p>
            <p className='sortby font-bold' onClick={()=>setSortby("top")}>Top Rated</p>
            <p className='sortby font-bold' onClick={()=>setSortby("low")}>Price (Lowest First)</p>
            <p className='sortby font-bold' onClick={()=>setSortby("high")}>Price(Highest First)</p>
            <hr/>
            <h4>Brands</h4>
           <p className='ml-1 font-bold gap-3 flex items-center'> <input type='checkbox' className='brands'  onChange={()=>handleBrand("JBL")}/>JBL</p>
           <p className='ml-1 font-bold gap-3 flex items-center'> <input type='checkbox'  onChange={()=>handleBrand("boAt")}/>boAt</p>
           <p className='ml-1 font-bold gap-3 flex items-center'> <input type='checkbox'  onChange={()=>handleBrand("Sony")}/>Sony</p>
            <h4>Category</h4>
           <p className='ml-1 font-bold gap-3 flex items-center'> <input type='checkbox' onChange={()=>handleCategory("Headphones")} />Headphones</p>
           <p className='ml-1 font-bold gap-3 flex items-center'> <input type='checkbox' onChange={()=>handleCategory("Earbuds")}/>Earbuds</p>
           <p className='ml-1 font-bold gap-3 flex items-center'> <input type='checkbox'  onChange={()=>handleCategory("Earphones")}/>Earphones</p>
           <p className='ml-1 font-bold gap-3 flex items-center'> <input type='checkbox'  onChange={()=>handleCategory("Neckbands")}/>Neckbands</p>
            <h4>Price</h4>
           <input type="range" min="0" max="15000" value={value} onChange={(e)=>setValue(Number(e.target.value))} className="w-44 appearance-none h-2 bg-gray-600 rounded-lg accent-blue-500"/>
           <p className='mt-2'>{value}</p>
           </div>
        </div>
      <div className="col-md-9 ml-5">
  {value === 0 ? (
    <h2 className="text-center mt-5">No products available</h2>
  ) : (
    <div className="grid grid-cols-4 gap-y-5 gap-x-24 ml-4 mt-5">
      {filterbrands.map((item, index) => (
        <div key={index}>
          <CardAll item={item} />
        </div>
      ))}
    </div>
  )}
</div>

    </div>
    </div>
    </div>

  )
}
