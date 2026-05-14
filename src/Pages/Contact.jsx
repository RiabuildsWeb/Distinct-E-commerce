import React from 'react'
import Title from '../Components/Title'
import contactimg from '../assets/contact_img.png'
import NewsletterBox from '../Components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-1 border-t '>
     <Title text1={' CONTACT '} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
     <img  className='w-full md:max-w-[480px]'src={contactimg} alt="" />
     <div className='flex flex-col justify-center items-start gap-6'>
     <p className='font-semibold text-xl text-gray-600'>Our Store</p>
     <p className='text-gray-500'>4567 Palms Street <br />Suite 350, Washngton, USA </p>
     <p className='text-gray-500'>Tel:08969884677 <br /> Email:distinct@gmail.com</p>
     <p className='font-semibold text-xl text-gray-600'>Careers at Dinstinct</p>
     <p className='text-gray-500'>Learn more about out team and job openings. </p>
     <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>Explore Jobs</button>
     </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact