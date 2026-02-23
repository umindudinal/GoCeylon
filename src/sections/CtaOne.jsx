import React, { useEffect } from 'react'
import Cta1 from '../assets/cta1.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaPlay } from 'react-icons/fa'

const CtaOne = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, []);

  return (
    <div id='cta1' className='relative w-full lg:h-125 h-auto lg:p-22 p-10 flex flex-col items-center justify-center gap-5 bg-cover bg-center' style={{backgroundImage: `url(${Cta1})`}}>
      <div className='absolute inset-0 bg-black/50'></div>
      <div className='relative z-10 flex flex-col justify-center items-center gap-5'>
        <h1 className='lg:text-5xl text-3xl font-fahkwang font-semibold text-white lg:w-[70%] w-full text-center capitalize' data-aos='zoom-in' data-aos-delay='100'>Ready to Explore Sri Lanka?</h1>
        <p className='text-white lg:w-[50%] w-full text-lg text-center' data-aos='zoom-in' data-aos-delay='200'>Book your Sri Lanka tour today and experience breathtaking beaches, ancient heritage, wildlife safaris, and unforgettable island adventures.</p>
        <div className='bg-white lg:p-7 p-4 rounded-full' data-aos='zoom-in' data-aos-delay='300'>
          <FaPlay className='text-orange-600 text-2xl'/>
        </div>
      </div>
    </div>
  )
}

export default CtaOne