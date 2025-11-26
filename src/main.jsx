import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ContextAPI from '../../context/src/Mycontext/ContextAPI.jsx'
import {Provider} from "react-redux"
import { storedata } from './CartStore/Storedata.js'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
  <ContextAPI>
    <Provider store={storedata}>
    <App />
    </Provider>
  </ContextAPI>
    </BrowserRouter>
  // </StrictMode>,
)
