import React, { useContext, useState } from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import flutter from '../assets/flutter2.jpeg'
import { ShopContext } from '../Context/ShopContext'
import paystacklogo from '../assets/Paystack-PNG_005.png'
import { useFlutterwave,closePaymentModal} from 'flutterwave-react-v3'

const PlaceOrder = () => {
   
  const [method,setMethod] = useState('cod');

  const {navigate, getCartAmount } = useContext(ShopContext)

  const [customer,setCustomer] = useState({
    email: '',
    firstname: '',
    lastname: '',
   phonenumber: '',
    country:'',
    city:'',
    state:'',
    street:'',
    zipcode:''


  })
   const handleChange = (e) => {
    setCustomer({
      ...customer,

      [e.target.name]: e.target.value
   })
   }

  const config = {
      public_key:'FLWPUBK_TEST-4f9ce1c785bfd1663e40a4f2ef6b2379-X',
      tx_ref: Date.now(),
      amount: getCartAmount(),
      currency:'NGN',
      payment_options: 'card,ussd,banktransfer',
  
      customer:{
        email: customer.email,
        name: `${customer.firstname} ${customer.lastname}`,
        phonenumber: customer.PhoneNumber,
        country:customer.Country,
        state:customer.State,
        city:customer.City,
        street:customer.Street,
        zipcode:customer.Zipcode
      },
      customization:{
        title:'My Business',
        description:'Payment in USD',
        logo: <h1 className='text-xl font-bold text-purple-600 '> Distinct</h1>
      },
  
  
    };
  
    const handleFlutterPayment = useFlutterwave(config);
    

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
      <div className='text-xl sm:text-2xl my-3'>
       <Title text1={' DELIVERY '} text2={'INFORMATION'}/>
      </div>
      <div className='flex gap-3'>
     <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' value={customer.firstname} name='firstname' type="text"  placeholder='First name' onChange={handleChange}/>
     <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' value={customer.lastname} name='lastname' type="text"  placeholder='Last name' onChange={handleChange}/>
      </div>
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' value={customer.Email} name='email' type="Email"  placeholder='Email address' onChange={handleChange}/>
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full'value={customer.Street} name='street' type="text"  placeholder='Street' onChange={handleChange}/>
      <div className='flex gap-3'>
     <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' value= {customer.City} name='city' type="text"  placeholder='City' onChange={handleChange}/>
     <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' value={customer.State} name='state' type="text"  placeholder='State' onChange={handleChange}/>
      </div>
      <div className='flex gap-3'>
     <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' value={customer.Zipcode} name='zipcode' type="number"  placeholder='Zipcode' onChange={handleChange}/>
     <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' value={customer.Country} name='country' type="text"  placeholder='Country'   onChange={handleChange}/>
      </div>
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' value={customer.PhoneNumber} name='phonenumber' type="number"  placeholder='Phone' onChange={handleChange}/>
      </div>
      {/* Right side */}
      <div className='mt-8'>
     <div className='mt-8 min-w-80'>
       <CartTotal />
     </div>
     <div className='mt-12 '>
     <Title text1={' PAYMENT '}text2={'METHOD'} />
     {/* Payment method selection */}
     <div className='flex gap-3 flex-col lg:flex-row'>
     <div onClick={()=>setMethod('paystack')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
     <p  className={`min-w-3.5 h-3.5 border rounded-full ${method=== 'paystack'  ? 'bg-purple-400' : ''}`}></p>
     <img className='h-25 mx-3' src={paystacklogo} alt="" />
      </div>
      <div onClick={()=>setMethod('flutterwave')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer '>
     <p className={`min-w-3.5 h-3 border rounded-full ${method=== 'flutterwave'  ? 'bg-purple-400 ': ''}`}></p>
     <img className='h-25 mx-4' src={flutter} alt="" />
      </div>
     </div>
     <div className='w-full text-end mt-8'>
      <button onClick={()=> {
        handleFlutterPayment({
      callback: (response) => {
        console.log(response);
  
      },
      onClose:  () => {
        console.log('Payment closed')
      },
      });
      }} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
     </div>
     </div>
      </div>

    </div>
  )
}

export default PlaceOrder