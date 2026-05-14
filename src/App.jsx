
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Collection from './Pages/Collection'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Product from './Pages/Product'
import PlaceOrder from './Pages/PlaceOrder'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Orders from './Pages/Orders'
import Hero from './Components/Hero'
import SearchBar from './Components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
 return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
    <Navbar />
    <SearchBar />
    <Routes>
      <Route path='/'element={<Home />} />
      <Route path='/collection' element={<Collection/>} />
      <Route path='/product/:productId'  element={<Product />} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
      <Route path='/placeorder' element={<PlaceOrder />} />
      <Route path='/orders' element={<Orders />} />
    </Routes>
    <Footer />
    </div>
      
  )
}

export default App
