import { configureStore } from "@reduxjs/toolkit"
import productreducer from "./Productsslice"
export const storedata=configureStore({
    reducer:{cart:productreducer}
})