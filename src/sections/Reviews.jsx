import React, { useEffect } from 'react'
import { ReviewsData, PartnerLogos } from '../export'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Reviews = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, [])

  return (
    <section id="reviews" className="w-full bg-slate-50 py-20 lg:py-24 px-5 lg:px-22 flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center max-w-3xl mb-14" data-aos="zoom-in" data-aos-delay="100">
        <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">
          Traveler Stories
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-fahkwang text-gray-900 mt-2 capitalize">
          Loved by Adventurers Worldwide
        </h2>
        <p className="text-gray-600 mt-3 text-base sm:text-lg">
          Read genuine feedback from international visitors who explored Sri Lanka’s ancient temples, misty highlands, and golden shores with us.
        </p>
        <div className="w-16 h-1 bg-orange-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Reviews Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20" data-aos="fade-up" data-aos-delay="200">
        {ReviewsData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-yellow-400 mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} className="text-base" />
                ))}
              </div>

              {/* Quote Icon & Text */}
              <div className="relative mb-6">
                <FaQuoteLeft className="text-orange-100 text-3xl absolute -top-2 -left-1 z-0 opacity-80" />
                <p className="text-gray-700 text-sm leading-relaxed relative z-10 italic">
                  "{item.text}"
                </p>
              </div>
            </div>

            {/* Author info */}
            <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-orange-500 shadow-sm"
              />
              <div className="min-w-0">
                <h4 className="font-bold text-sm text-gray-900 truncate">{item.name}</h4>
                <p className="text-xs text-gray-500">{item.country}</p>
                <span className="inline-block text-[11px] font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full mt-1">
                  {item.tour}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust & Partners Strip */}
      <div className="w-full bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm flex flex-col items-center gap-6" data-aos="zoom-in" data-aos-delay="300">
        <h4 className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-widest text-center">
          Accredited Partners & Global Hospitality Standards
        </h4>
        <div className="w-full flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80 hover:opacity-100 transition-opacity">
          {PartnerLogos.map((partner) => (
            <img
              key={partner.id}
              src={partner.img}
              alt={partner.name}
              className="h-10 sm:h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
