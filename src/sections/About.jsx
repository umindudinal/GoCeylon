import React, { useEffect } from 'react'
import AboutImg1 from '../assets/about1.webp'
import AboutImg2 from '../assets/about2.webp'
import { FaGlobeAmericas, FaAward } from 'react-icons/fa'
import { IoIosPricetag } from 'react-icons/io'
import { Link } from 'react-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, [])

  return (
    <section id="about" className="w-full bg-white flex lg:flex-row flex-col justify-center items-center gap-12 lg:gap-16 lg:px-22 px-6 lg:py-24 py-20 overflow-hidden">
      {/* Left Images with Overlay Composition */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center sm:items-start relative">
        <div className="relative">
          <img
            src={AboutImg1}
            alt="Sri Lanka landscape exploration"
            className="rounded-2xl shadow-xl w-full object-cover max-h-120"
            data-aos="zoom-in"
            data-aos-delay="100"
          />
          <img
            src={AboutImg2}
            alt="Cultural experience in Sri Lanka"
            className="rounded-2xl w-1/2 sm:w-2/5 border-4 sm:border-8 border-white shadow-2xl -mt-24 sm:-mt-32 -ml-3 sm:-ml-6 -rotate-3 relative z-10 hover:rotate-0 transition-transform duration-300"
            data-aos="zoom-in"
            data-aos-delay="200"
          />
          {/* Experience Badge */}
          <div className="absolute top-4 right-4 bg-orange-600 text-white p-3 sm:p-4 rounded-2xl shadow-lg flex items-center gap-2 z-10" data-aos="fade-left">
            <FaAward className="text-2xl text-yellow-300" />
            <div>
              <p className="text-xs font-bold leading-none uppercase">Certified</p>
              <p className="text-sm font-extrabold">Local Agency</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-5">
        <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest" data-aos="zoom-in" data-aos-delay="100">
          About GoCeylon
        </span>
        <h2 className="lg:text-5xl text-3xl font-fahkwang font-semibold text-gray-900 capitalize leading-tight" data-aos="zoom-in" data-aos-delay="150">
          Experience the True Wonder of Sri Lanka With Our Island Specialists
        </h2>
        <p className="text-gray-600 text-base leading-relaxed" data-aos="zoom-in" data-aos-delay="200">
          We are a team of passionate, licensed Sri Lankan travel professionals dedicated to crafting authentic, customized journeys for travelers worldwide. From UNESCO heritage sites and tea plantations to pristine coastlines and remote wildlife reserves, we bring Sri Lanka to life.
        </p>
        <p className="text-gray-600 text-base leading-relaxed -mt-2" data-aos="zoom-in" data-aos-delay="250">
          Our core commitment is transparent pricing, safety-first logistics, and heartwarming hospitality that makes you feel at home every step of the journey.
        </p>

        <hr className="w-full border-gray-200 my-2" />

        {/* Highlight Feature Boxes */}
        <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-5" data-aos="zoom-in" data-aos-delay="300">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-gray-100">
            <div className="w-12 h-12 flex justify-center items-center bg-orange-600 text-white rounded-xl shadow-md shrink-0">
              <FaGlobeAmericas className="text-2xl" />
            </div>
            <div>
              <h3 className="text-gray-900 text-lg font-semibold font-fahkwang">Top Destinations</h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                Hand-picked routes across beaches, ancient kingdoms, mountains, and wildlife reserves.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-gray-100">
            <div className="w-12 h-12 flex justify-center items-center bg-orange-600 text-white rounded-xl shadow-md shrink-0">
              <IoIosPricetag className="text-2xl" />
            </div>
            <div>
              <h3 className="text-gray-900 text-lg font-semibold font-fahkwang">Best Price Guarantee</h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                Direct local agency rates with no hidden middleman markups or surprise fees.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Link */}
        <div className="pt-2">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="inline-block bg-gray-900 hover:bg-orange-600 text-white px-7 py-3 rounded-xl font-semibold text-sm transition cursor-pointer shadow-md"
          >
            Get in Touch With an Expert
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About