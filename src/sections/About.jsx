import React, { useEffect } from 'react'
import AboutImg1 from '../assets/about1.webp'
import AboutImg2 from '../assets/about2.webp'
import { FaGlobeAmericas } from 'react-icons/fa'
import { IoIosPricetag } from 'react-icons/io'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useEffect(() => {
      AOS.init({
        duration: 800,
        delay: 200,
        once: false,
      })
    }, []);

  return (
    <>
    <div id='about' className='flex lg:flex-row flex-col justify-center items-center gap-15 lg:px-22 px-5 lg:py-22 p-20'>
      <div className='flex flex-col justify-center items-start'>
        <img src={AboutImg1} alt="" className='rounded-md' data-aos='zoom-in' data-aos-delay='100'/>
        <img src={AboutImg2} alt="" className='rounded-md w-[40%] border-10 border-white -mt-37.5 -ml-7.5 -rotate-2' data-aos='zoom-in' data-aos-delay='200'/>
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='text-md text-gray-600' data-aos='zoom-in' data-aos-delay='300'>About Us</h1>
        <h1 className='lg:text-5xl text-3xl font-fahkwang font-semibold text-black capitalize' data-aos='zoom-in' data-aos-delay='400'>Experience the True Beauty of Sri Lanka With Our Travel Experts</h1>
        <p className='text-gray-700 font-semibold' data-aos='zoom-in' data-aos-delay='500'>We are a passionate Sri Lankan travel team dedicated to creating authentic, unforgettable island experiences for visitors from around the world. From golden beaches and ancient cultural sites to wildlife safaris and scenic hill country journeys, we help you explore the very best of Sri Lanka.</p>
        <p className='text-gray-700 font-semibold' data-aos='zoom-in' data-aos-delay='500'>Our mission is to make every journey safe, comfortable, and truly memorable.</p>
        <hr className='w-full border-gray-300 border-t' />
        <div id='iconbox' className='w-full grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:gap-5 gap-10' data-aos='zoom-in' data-aos-delay='600'>
          <div id='left' className='flex lg:flex-row flex-col justify-center lg:items-center items-start gap-4'>
            <div id='icon' className='w-[20%] flex justify-center items-center bg-orange-600 hover:bg-black cursor-pointer p-4 rounded-md transition'>
              <FaGlobeAmericas className='text-white text-3xl' />
            </div>
            <div className='w-[80%] flex flex-col justify-center items-start gap-1'>
              <h1 className='text-black text-xl font-medium'>Best Destination</h1>
              <p className='text-sm text-gray-500'>Explore Sri Lanka’s most beautiful beaches, heritage sites, mountains, and wildlife parks with carefully planned tours.</p>
            </div>
          </div>
          <div id='right' className='flex lg:flex-row flex-col justify-center lg:items-center items-start gap-4'>
            <div id='icon' className='w-[20%] flex justify-center items-center bg-orange-600 hover:bg-black cursor-pointer p-4 rounded-md transition'>
              <IoIosPricetag className='text-white text-3xl' />
            </div>
            <div className='w-[80%] flex flex-col justify-center items-start gap-1'>
              <h1 className='text-black text-xl font-medium'>Affordable Price</h1>
              <p className='text-sm text-gray-500'>We offer flexible packages with fair local pricing to suit both luxury and budget travelers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About