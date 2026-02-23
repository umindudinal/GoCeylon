import React, { useEffect } from 'react'
import { FeaturesData } from '../export'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Features = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, []);

  return (
    <div id='features' className='w-full lg:px-22 px-5 lg:py-22 py-20 flex flex-col justify-between items-center gap-5 mb-20'>
      <h1 className='lg:text-5xl text-3xl font-fahkwang font-semibold text-black text-center capitalize' data-aos='zoom-in' data-aos-delay='100'>Why Travel With Us in Sri Lanka?</h1>
      <p className='text-gray-500 lg:w-[60%] w-full text-center' data-aos='zoom-in' data-aos-delay='200'>We provide reliable and affordable travel services across Sri Lanka to make your journey safe, comfortable, and unforgettable.</p>
      <div className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-5' data-aos='zoom-in' data-aos-delay='100'>
        {
          FeaturesData.map((item, index) => (
            <div key={index} className='flex flex-col justify-center items-center gap-5 bg-gray-200 rounded-md lg:p-10 p-6'>
              <span className='bg-orange-600 hover:bg-black cursor-pointer p-4 rounded-md text-white'><item.icon className='text-3xl'/></span>
              <h1 className='text-xl text-center font-semibold text-black'>{item.name}</h1>
              <p className='text-gray-500 text-center text-sm'>{item.about}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Features