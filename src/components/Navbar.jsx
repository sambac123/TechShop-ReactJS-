import React, { useMemo,useState,useRef,useEffect} from 'react'
import "./Header.css"
import { CiSearch } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import productsData from '../contextApi/Products';
export default function Navbar() {
    const [showInput, setShowInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);
  const navigate =useNavigate();
  useEffect(() => {
  function handleClickOutside(e) {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setShowInput(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);
  const debounce=(fn,delay)=>{
    let timeout;
   return(...args)=>{
    clearTimeout(timeout)
    timeout=setTimeout(()=>fn(...args),delay)
    }
  }
  const handleSearch=debounce((value)=>{
    setSearchTerm(value)
  },300)
  const filterserach=useMemo(()=>{
    if(!searchTerm.trim())return[]
    return productsData.filter(item=>item.title.toLowerCase().includes(searchTerm.toLowerCase()))
  },[searchTerm])
  const cartcount=useSelector((state)=>state.cart.cartItem.reduce((total,item)=>total+item.qty,0))
  return (
    <>
   <div className="header shadow fixed top-0 left-0 w-full z-50">
     <div className="h-16 mx-auto px-5 flex items-center justify-between">
     <Link to="/">  <h2 className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer text-white">Tech Shop</h2></Link>
         <ul className="flex items-center gap-5 text-xl">
           <li onClick={()=>setShowInput(!showInput)}  className='group relative cursor-pointer flex flex-col items-center'><CiSearch className='text-white '/><span className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-sm opacity-1 transform group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">Search</span></li>
           <li className="group relative flex flex-col items-center cursor-pointer" >
           <Link to="/cart"> <IoCartOutline className='text-white'/></Link>
             {
          <span className='absolute -top-1 -right-6 w-5 h-5 p-1 flex items-center text-white  rounded-2xl bg-red-500 pointer-events-none'>{cartcount}</span>
        }
            <span className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-sm opacity-1 transform group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">Cart</span></li>

           <li className="group relative flex flex-col items-center cursor-pointer"  data-bs-toggle="modal" data-bs-target="#accountPrompt"><LuUserRound className='text-white'/><span className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-sm opacity-1 transform group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">Login</span></li>
         </ul>
     </div>
   </div>
   {showInput&&(
    <div ref={inputRef} className='absolute top-4 left-1/2 -translate-x-1/2 w-[300px] z-[999]'>
       <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 rounded bg-black text-white outline-none shadow-md"
            onChange={(e) => handleSearch(e.target.value)}
          />
          {filterserach.map((item)=>{
             return(
               <p
                  key={item.id}
                  className="p-2 border-b border-gray-700 cursor-pointer hover:text-red-500 text-white"
                  onClick={() => {
                    navigate(`/productsdetails/${item.id}`);
                    setShowInput(false);
                    setSearchTerm("");
                  }}
                >
                  {item.title}
                </p>
             )
          })}
    </div>
   )}
   
   <div class="modal fade" id="accountPrompt" tabindex="-1" aria-hidden="true">
       <div class="modal-dialog modal-sm modal-dialog-scrollable modal-right">
         <div class="modal-content bg-dark text-light p-3">
           <h6 class="mb-2"><strong>Hello!</strong></h6>
           <p class="mb-2">Access account and manage orders</p>
           <button class="btn btn-outline-light w-100 mb-2" data-bs-target="#loginModal" data-bs-toggle="modal" data-bs-dismiss="modal">Login / Signup</button>
           <small class="text-muted">Please Login</small>
         </div>
       </div>
     </div>
   
     {/* <!-- Login / Signup Modal --> */}
     <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
       <div class="modal-dialog">
         <div class="modal-content bg-dark text-light p-4">
           <div class="modal-header border-0">
             <h5 class="modal-title" id="formTitle">Login</h5>
             <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
           </div>
           <div class="modal-body">
             <p id="switchPrompt">New to Tech-Shop? <span class="text-info cursor-pointer" data-bs-target="#signupForm" data-bs-toggle="modal" data-bs-dismiss="modal">Create an account</span></p>
             <input type="email" class="form-control mt-2" placeholder="Email"/>
             <input type="password" class="form-control mt-2" placeholder="Password"/>
             <button class="btn btn-danger w-100 mt-3">Login</button>
             <p class="text-center mt-2">or login with</p>
             <div class="d-flex justify-content-around">
               <button class="btn btn-primary">Facebook</button>
               <button class="btn btn-danger">Google</button>
               <button class="btn btn-info text-white">Twitter</button>
             </div>
           </div>
         </div>
       </div>
     </div>
   
     {/* <!-- Signup Modal --> */}
     <div class="modal fade" id="signupForm" tabindex="-1" aria-hidden="true">
       <div class="modal-dialog">
         <div class="modal-content bg-dark text-light p-4">
           <div class="modal-header border-0">
             <h5 class="modal-title">Signup</h5>
             <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
           </div>
           <div class="modal-body">
             <p>Already have an account? <span class="text-info cursor-pointer" data-bs-target="#loginModal" data-bs-toggle="modal" data-bs-dismiss="modal">Login</span></p>
             <input type="text" class="form-control" placeholder="Username"/>
             <input type="email" class="form-control mt-2" placeholder="Email"/>
             <input type="password" class="form-control mt-2" placeholder="Password"/>
             <input type="password" class="form-control mt-2" placeholder="Confirm Password"/>
             <button class="btn btn-danger w-100 mt-3">Signup</button>
             <p class="text-center mt-2">or Signup with</p>
             <div class="d-flex justify-content-around">
               <button class="btn btn-primary">Facebook</button>
               <button class="btn btn-danger">Google</button>
               <button class="btn btn-info text-white">Twitter</button>
             </div>
           </div>
         </div>
       </div>
     </div>
     </>
  )
}
