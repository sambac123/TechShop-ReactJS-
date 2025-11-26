import {createSlice} from "@reduxjs/toolkit"
const productSlice=createSlice({
    name:"productisslicedata",
    initialState:{cartItem:[]},
    reducers:{
        addtocart:(state,action)=>{const item={...action.payload,qty:1};state.cartItem.push(item)},
        updateqty:(state,action)=>{const {id,type}=action.payload;state.cartItem=state.cartItem.map((item)=>item.id===id?{...item,qty:type==="incre"?item.qty+1:Math.max(1,item.qty-1)}:item)},
        deleteitem:(state,action)=>{state.cartItem=state.cartItem.filter(item=>item.id!==action.payload)}
    }
})
console.log("productSlice",productSlice)
export default productSlice.reducer
export const {addtocart,updateqty,deleteitem}=productSlice.actions