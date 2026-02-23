import React, { useEffect } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, []);

  return (
    <div id='contact' className='w-full bg-black lg:px-22 px-5 py-10 flex flex-col justify-center items-center gap-12'>
      <div id='top' className='bg-[#046e8f] w-full lg:px-10 p-6 rounded-md flex lg:flex-row flex-col justify-between items-start -mt-30 gap-6' data-aos='zoom-in' data-aos-delay='100'>
        <div className='lg:w-[70%] w-full flex flex-col justify-between items-start gap-5'>
          <h1 className='text-3xl font-fahkwang font-semibold text-white text-left lg:w-[60%] w-full capitalize'>Crafting Unforgettable Sri Lanka Journeys, One Adventure at a Time</h1>
          <hr className='lg:w-[10%] w-[20%] border-2 border-orange-600' />
        </div>
        <div className='lg:w-[30%] w-full flex flex-col justify-between items-start gap-5'>
          <h1 className='text-white text-xl capitalize'>Subscribe to our newsletter for the latest Sri Lanka travel deals and updates.</h1>
          <div className='flex lg:flex-row flex-col gap-3 w-full'>
            <input type="email" placeholder='Enter your Email' className='bg-white p-3 rounded-md text-black outline-none'/>
            <button className='bg-orange-600 text-white p-3 rounded-md cursor-pointer'>Subscribe</button>
          </div>
        </div>
      </div>
      <div id='mid' className='text-white flex lg:flex-row flex-col justify-between items-start gap-10'>
        <div className='lg:w-[40%] w-full'>
          <h1 className='text-3xl font-fahkwang font-semibold'>GoCeylon</h1>
          <p className='mt-5'>Your trusted travel partner for exploring the beauty of Sri Lanka.</p>
          <div className='flex flex-col justify-between items-start gap-2 mt-5'>
            <div className='flex justify-between items-center gap-2'><IoMail className='text-orange-600 text-xl'/> umindudinal@gmail.com</div>
             <div className='flex justify-between items-center gap-2'><FaPhoneAlt className='text-orange-600 text-xl'/> +97 77 964 8818</div>
          </div>
        </div>
        <div className='lg:w-[20%] w-full'>
          <h1 className='text-xl font-medium font-fahkwang'>Quick Links</h1>
          <ul className='flex flex-col justify-between items-start gap-3 mt-5'>
            <li><a href="#home" className='hover:text-orange-600 transition-colors'>Home</a></li>
            <li><a href="#about" className='hover:text-orange-600 transition-colors'>About</a></li>
            <li><a href="#services" className='hover:text-orange-600 transition-colors'>Services</a></li>
            <li><a href="#features" className='hover:text-orange-600 transition-colors'>Features</a></li>
            <li><a href="#contact" className='hover:text-orange-600 transition-colors'>Contact</a></li>
          </ul>
        </div>
        <div className='lg:w-[20%] w-full'>
          <h1 className='text-xl font-medium font-fahkwang'>Travel Services</h1>
          <ul className='flex flex-col justify-between items-start gap-3 mt-5'>
            <li><a href="#home" className='hover:text-orange-600 transition-colors'>Our Packages</a></li>
            <li><a href="#about" className='hover:text-orange-600 transition-colors'>Flight & Hote Detaills</a></li>
            <li><a href="#services" className='hover:text-orange-600 transition-colors'>Travel Insurance</a></li>
            <li><a href="#features" className='hover:text-orange-600 transition-colors'>Viso Assistance</a></li>
            <li><a href="#contact" className='hover:text-orange-600 transition-colors'>Online Booking</a></li>
          </ul>
        </div>
        <div className='lg:w-[20%] w-full'>
          <h1 className='text-xl font-medium font-fahkwang'>Follow Us</h1>
          <ul className='flex flex-col justify-between items-start gap-3 mt-5'>
            <li><a href="#home" className='flex justify-between items-center gap-2 hover:text-orange-600 transition-colors'><FaFacebook className='text-orange-600 text-xl'/> Facebook</a></li>
            <li><a href="#home" className='flex justify-between items-center gap-2 hover:text-orange-600 transition-colors'><FaInstagram className='text-orange-600 text-xl'/> Instagram</a></li>
            <li><a href="#home" className='flex justify-between items-center gap-2 hover:text-orange-600 transition-colors'><FaLinkedin className='text-orange-600 text-xl'/> Linkedin</a></li>
            <li><a href="#home" className='flex justify-between items-center gap-2 hover:text-orange-600 transition-colors'><FaTwitter className='text-orange-600 text-xl'/> Twitter</a></li>
          </ul>
        </div>
      </div>
      <hr className='w-full border-gray-800'/>
      <div id='last' className='flex justify-between items-center gap-2'>
        <p className='text-gray-300 text-center'>&copy; 2026 GoCeylon. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer