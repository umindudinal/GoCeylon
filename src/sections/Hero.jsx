import React, { useEffect } from 'react'
import Heroimg from '../assets/hero.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, []);

  return (
    <>
    <div id='home' className='relative w-full lg:h-screen py-30 h-auto bg-cover bg-center z-20' style={{backgroundImage: `url(${Heroimg})`}}>
      <div className='absolute inset-0 bg-black/40'></div>
      <div className='w-full relative z-10 flex flex-col justify-center items-center h-full gap-6 text-white px6'>
        <h1 className='lg:text-7xl text-4xl capitalize text-center font-fahkwang font-bold' data-aos='zoom-in' data-aos-delay='100'>Explore the Beauty of <br /> Sri Lanka</h1>
        <p className='text-lg text-center lg:w-[50%] w-full' data-aos='zoom-in' data-aos-delay='200'>Discover golden beaches, ancient heritage sites, wildlife safaris, and breathtaking hill country with our expertly curated Sri Lanka travel experiences.</p>
        <button className='bg-orange-600 hover:bg-black hover:text-white px-8 py-3 font-semibold capitalize rounded mt-5 cursor-pointer transition' data-aos='slide-up' data-aos-delay='300'>Book Your Tour</button>
      </div>
    </div>
    </>
  )
}

export default Hero