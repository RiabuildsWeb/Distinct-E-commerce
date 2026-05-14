import React from 'react'
import Title from '../Components/Title'
import aboutimg from '../assets/about_img.png'
import NewsletterBox from '../Components/NewsletterBox'

const About = () => {
  return (
    <div>
   <div className='text-2xl text-center pt-8 border-t'>
 <Title text1= {' About '} text2={'US'}/>
   </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img  className='w-full md:max-w-[450px]'src={aboutimg} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
     <p>Distinct as the name implies is born out of the passion to be exceptional,Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore error eveniet quae nam eum eaque maiores dolor est, quos iusto debitis rerum numquam nemo quis enim deserunt deleniti soluta? Recusandae.

     </p>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat accusantium voluptatibus rerum.</p>
     <b className='text-gray-800'>Our Mission</b>
     <p>Our mission Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia tempora corrupti similique eligendi?</p>
      </div>
      </div>
      <div className='text-xl py-4'>
      <Title text1={' WHY '} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Quality Assurance:</b>
      <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non iure sapiente sunt! Vero, cum quo harum a optio itaque quidem!</p>
      </div>
     <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Convenience:</b>
      <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non iure sapiente sunt! Vero, cum quo harum a optio itaque quidem!</p>
      </div>
     <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Exceptional Customer Service</b>
      <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non iure sapiente sunt! Vero, cum quo harum a optio itaque quidem!</p>
      </div>


      </div>
      <NewsletterBox />

    </div>
    
  )
}

export default About