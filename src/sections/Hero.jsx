import React, { useEffect } from 'react'
import Heroimg from '../assets/hero.webp'
import { Link } from 'react-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, [])

  return (
    <div
      id="home"
      className="relative w-full min-h-screen py-32 px-5 flex flex-col justify-center items-center bg-cover bg-center z-20"
      style={{ backgroundImage: `url(${Heroimg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70"></div>

      {/* Main Hero Content */}
      <div className="w-full max-w-5xl relative z-10 flex flex-col justify-center items-center text-white text-center gap-6 mt-12 sm:mt-8">
        

        {/* Main Headline */}
        <h1
          className="lg:text-7xl sm:text-5xl text-4xl capitalize font-fahkwang font-extrabold leading-tight tracking-tight drop-shadow-md"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          Explore the Beauty of <br />
          <span className="text-orange-500">Sri Lanka</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-xl text-gray-200 max-w-2xl font-light leading-relaxed drop-shadow"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Discover golden palm-fringed beaches, ancient UNESCO rock citadels, mist-covered mountain tea estates, and wild leopard safaris with our bespoke island tours.
        </p>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <Link
            to="packages"
            smooth={true}
            duration={600}
            offset={-80}
            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-8 py-3.5 font-semibold text-sm sm:text-base capitalize rounded-xl cursor-pointer transition-all duration-300 shadow-lg hover:shadow-orange-600/50 transform hover:-translate-y-0.5 text-center"
          >
            Explore Tour Packages
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={600}
            offset={-80}
            className="w-full sm:w-auto bg-white/20 hover:bg-white hover:text-black backdrop-blur-md border border-white/30 text-white px-8 py-3.5 font-semibold text-sm sm:text-base capitalize rounded-xl cursor-pointer transition-all duration-300 shadow-md text-center"
          >
            View Top Destinations
          </Link>
        </div>

        {/* Trust Badges Bar */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-8 sm:pt-12 border-t border-white/15 w-full max-w-4xl mt-6 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold font-fahkwang text-orange-400">500+</span>
            <span className="text-xs text-gray-300 mt-0.5">Happy Global Travelers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold font-fahkwang text-orange-400">6+</span>
            <span className="text-xs text-gray-300 mt-0.5">UNESCO Heritage Sites</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold font-fahkwang text-orange-400">4.9 / 5</span>
            <span className="text-xs text-gray-300 mt-0.5">Verified Traveler Reviews</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold font-fahkwang text-orange-400">24/7</span>
            <span className="text-xs text-gray-300 mt-0.5">Concierge & Local Guides</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero