import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createRoot } from 'react-dom/client'
import './index.css'
import ShopContextProvider from './Context/ShopContext' 


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShopContextProvider>
     <App />
  </ShopContextProvider>
  </BrowserRouter>,
)
