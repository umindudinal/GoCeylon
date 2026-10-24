import React, { useEffect } from 'react'
import Cta1 from '../assets/cta1.webp'
import { Link } from 'react-scroll'
import { FaWhatsapp, FaPlane } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const CtaOne = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, [])

  return (
    <section
      id="cta1"
      className="relative w-full min-h-[420px] lg:min-h-[480px] py-20 px-6 flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Cta1})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      <div className="relative z-10 flex flex-col justify-center items-center gap-6 max-w-4xl text-center text-white">
        <span
          className="inline-flex items-center gap-2 bg-orange-600/90 text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md"
          data-aos="fade-down"
        >
          <FaPlane className="text-xs" /> Tailor-Made Itineraries
        </span>

        <h2
          className="lg:text-5xl sm:text-4xl text-3xl font-fahkwang font-bold capitalize leading-tight"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          Ready to Start Your Unforgettable Sri Lanka Adventure?
        </h2>

        <p
          className="text-gray-200 text-base sm:text-lg max-w-2xl font-light leading-relaxed"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Whether you want a relaxing southern beach holiday, a high-octane wildlife safari, or a cultural deep-dive, we design personalized packages to match your dream itinerary.
        </p>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <Link
            to="packages"
            smooth={true}
            duration={600}
            offset={-80}
            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-8 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition cursor-pointer shadow-lg hover:shadow-orange-600/40 text-center"
          >
            Browse All Tour Packages
          </Link>
          <a
            href={`https://wa.me/97779648818?text=${encodeURIComponent(
              'Hi GoCeylon! 🌴 I am planning a trip to Sri Lanka and would like to customize an itinerary.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition cursor-pointer shadow-lg hover:shadow-emerald-600/40"
          >
            <FaWhatsapp className="text-xl" /> Talk on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default CtaOne