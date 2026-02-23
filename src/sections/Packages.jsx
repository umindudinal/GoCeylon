import React, { useEffect } from 'react'
import { Tourpackages } from '../export'
import { MdOutlineDateRange } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Packages = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, []);

  return (
    <div id='packages' className='w-full bg-gray-200 flex flex-col justify-center items-center gap-10 lg:px-22 px-5 lg:py-22 py-20'>
      <div id='top' className='w-full flex lg:flex-row flex-col justify-between items-center lg:gap-20 gap-5'>
        <div>
          <h1 className='lg:text-5xl text-3xl font-fahkwang font-semibold text-black capitalize' data-aos='zoom-in' data-aos-delay='100'>Explore Our Most Popular Sri Lanka Tour Packages</h1>
        </div>
        <div className='flex flex-col justify-between items-start gap-7'>
          <p className='text-gray-500 text-left w-full' data-aos='zoom-in' data-aos-delay='200'>Discover our best Sri Lanka travel packages designed to give you unforgettable island experiences, from cultural heritage and scenic mountains to tropical beaches and wildlife safaris.</p>
          <hr className='w-[15%] border-2 border-orange-600' data-aos='zoom-in' data-aos-delay='300'/>
        </div>
      </div>
      <div id='bottom' className='w-full' data-aos='zoom-in' data-aos-delay='400'>
        <div className='w-full grid lg:grid-cols-3 grid-cols-1 justify-between items-start gap-6 mt-10'>
          {
            Tourpackages.map((item, index) => (
              <div key={index} className='w-full flex flex-col justify-between'>
                <div id='imagebox' style={{backgroundImage:`url(${item.image})`}} className='bg-cover bg-center h-75 rounded-t-md relative '>
                  <span className='bg-orange-600 text-white absolute top-3 left-3 w-auto h-auto p-2 flex flex-col justify-center items-center rounded-md'>
                    <span className='text-xl font-medium'>{item.price}<p className='text-sm font-light'>Person</p></span>
                  </span>
                </div>
                <div id='content-box' className='w-full flex flex-col justify-between items-center bg-white p-7 gap-5'>
                  <h1 className='text-xl text-black font-fahkwang font-semibold w-[80%]'>{item.name}</h1>
                  <hr className='w-full border-gray-200'/>
                  <div className='w-full flex justify-start items-center gap-5'>
                    <span className='flex justify-between items-center gap-1'>
                      <MdOutlineDateRange className='text-orange-600 text-xl'/>
                      <p>{item.days}</p>
                    </span>
                    <span className='flex justify-between items-center gap-1'>
                      <FaUsers className='text-orange-600 text-xl'/>
                      <p>{item.pax}</p>
                    </span>
                  </div>
                  <div className='text-gray-500'>{item.about}</div>
                  <button className='bg-orange-600 hover:bg-black w-full text-white px-8 py-3 font-semibold capitalize rounded-md mt-5 cursor-pointer'>{item.btn}</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Packages