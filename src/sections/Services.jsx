import React, { useEffect } from 'react'
import Service1 from '../assets/service1.webp'
import Service2 from '../assets/service2.webp'
import Service3 from '../assets/service3.webp'
import Service4 from '../assets/service4.webp'
import Service5 from '../assets/service5.webp'
import Service6 from '../assets/service6.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaPlay } from 'react-icons/fa'

const Services = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, []);

  return (
    <div id='services' className='w-full bg-gray-200 lg:px-22 px-5 lg:py-22 py-20 flex flex-col justify-between lg:items-center items-left gap-5'>
      <h1 className='lg:text-5xl text-3xl font-fahkwang font-semibold capitalize' data-aos='zoom-in' data-aos-delay='100'>Discover Your Next Sri Lanka Destination</h1>
      <p className='text-gray-500 lg:w-[60%] w-full lg:text-center text-left' data-aos='zoom-in' data-aos-delay='200'>We offer the most beautiful and must-visit places across Sri Lanka to make your journey unforgettable.</p>
      <hr className='lg:w-[7%] w-[20%] border-2 border-orange-600' data-aos='zoom-in' data-aos-delay='300'/>

      <div id='first-row' className='w-full flex lg:flex-row flex-col justify-between items-center gap-5 mt-5' data-aos='zoom-in' data-aos-delay='200'>
        <div id='left' className='lg:w-[50%] w-full flex lg:flex-row flex-col justify-between items-center gap-5'>
          <div style={{backgroundImage: `url(${Service1})`}} className='relative bg-cover bg-center w-full h-87.5 rounded-md p-8 flex justify-center items-end'>
            <div className='absolute rounded-md inset-0 bg-linear-to-t from-black/60 via-black/40 to-white/10'></div>
            <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
              <div className='lg:w-[80%] w-full'>
                <h1 className='text-white text-2xl font-semibold'>Sigiriya</h1>
                <p className='text-white text-lg'>Cultural Wonder</p>
              </div>
              <div className='w-[20%] bg-white rounded-full flex justify-center items-center p-3'>
                <FaPlay className='lg:text-2xl text-xl'/>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Service2})`}} className='relative bg-cover bg-center w-full h-87.5 rounded-md p-8 flex justify-center items-end'>
            <div className='absolute rounded-md inset-0 bg-linear-to-t from-black/60 via-black/40 to-white/10'></div>
            <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
              <div className='lg:w-[80%] w-full'>
                <h1 className='text-white text-2xl font-semibold'>Kandy</h1>
                <p className='text-white text-lg'>Cultural Heritage</p>
              </div>
              <div className='w-[20%] bg-white rounded-full flex justify-center items-center p-3'>
                <FaPlay className='lg:text-2xl text-xl'/>
              </div>
            </div>
          </div>
        </div>
        <div id='right'className='lg:w-[50%] w-full' >
          <div style={{backgroundImage: `url(${Service3})`}} className='relative bg-cover bg-center w-full h-87.5 rounded-md p-8 flex justify-center items-end'>
            <div className='absolute rounded-md inset-0 bg-linear-to-t from-black/60 via-black/40 to-white/10'></div>
            <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
              <div className='lg:w-[80%] w-full'>
                <h1 className='text-white text-2xl font-semibold'>Ella</h1>
                <p className='text-white text-lg'>Hill Country</p>
              </div>
              <div className='w-[20%] bg-white rounded-full flex justify-center items-center p-3'>
                <FaPlay className='lg:text-2xl text-xl'/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='first-row' className='w-full flex lg:flex-row flex-col justify-between items-center gap-5 mt-0' data-aos='zoom-in' data-aos-delay='200'>
        <div id='left' className='lg:w-[50%] w-full'>
          <div style={{backgroundImage: `url(${Service4})`}} className='relative bg-cover bg-center w-full h-87.5 rounded-md p-8 flex justify-center items-end'>
            <div className='absolute rounded-md inset-0 bg-linear-to-t from-black/60 via-black/40 to-white/10'></div>
            <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
              <div className='lg:w-[80%] w-full'>
                <h1 className='text-white text-2xl font-semibold'>Yala</h1>
                <p className='text-white text-lg'>Wildlife Safari</p>
              </div>
              <div className='w-[20%] bg-white rounded-full flex justify-center items-center p-3'>
                <FaPlay className='lg:text-2xl text-xl'/>
              </div>
            </div>
          </div>
        </div>
        <div id='right'className='lg:w-[50%] w-full flex lg:flex-row flex-col justify-between items-center gap-5' >
          <div style={{backgroundImage: `url(${Service5})`}} className='relative bg-cover bg-center w-full h-87.5 rounded-md p-8 flex justify-center items-end'>
            <div className='absolute rounded-md inset-0 bg-linear-to-t from-black/60 via-black/40 to-white/10'></div>
            <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
              <div className='lg:w-[80%] w-full'>
                <h1 className='text-white text-2xl font-semibold'>Mirissa</h1>
                <p className='text-white text-lg'>Beach Escape</p>
              </div>
              <div className='w-[20%] bg-white rounded-full flex justify-center items-center p-3'>
                <FaPlay className='lg:text-2xl text-xl'/>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Service6})`}} className='relative bg-cover bg-center w-full h-87.5 rounded-md p-8 flex justify-center items-end'>
            <div className='absolute rounded-md inset-0 bg-linear-to-t from-black/60 via-black/40 to-white/10'></div>
            <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
              <div className='lg:w-[80%] w-full'>
                <h1 className='text-white text-2xl font-semibold'>Galle</h1>
                <p className='text-white text-lg'>Historic City</p>
              </div>
              <div className='w-[20%] bg-white rounded-full flex justify-center items-center p-3'>
                <FaPlay className='lg:text-2xl text-xl'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services