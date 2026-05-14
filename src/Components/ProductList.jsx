import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'
import Product from '../Pages/Collection'
import ProductItem from './ProductItem'


 
const ProductList = () => {
   const { products }=useContext(ShopContext);
   const[productLists, setProductLists]= useState([]);

   useEffect(()=>{
setProductLists(products.slice(0,10));
   },[])
   

  return (
    <div className='my-10'>
      <div className='text-center py-8  text-3xl'>
        <Title text1={'Product'} text2={'Lists'} />
        <p className='W-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita.
        </p>

      </div>
      {/* Rendring products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols4 lg:grid-cols-5 gap-4 gap-y-6'>
     {
      productLists.map((item,index)=>(
        <ProductItem  key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
      ))
     }
      </div>
     
    </div>
     
  )
}

export default ProductList
