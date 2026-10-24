import React, { useState, useEffect } from 'react'
import Service1 from '../assets/service1.webp'
import Service2 from '../assets/service2.webp'
import Service3 from '../assets/service3.webp'
import Service4 from '../assets/service4.webp'
import Service5 from '../assets/service5.webp'
import Service6 from '../assets/service6.webp'
import { DestinationsData } from '../export'
import DestinationModal from '../components/DestinationModal'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaInfoCircle } from 'react-icons/fa'

const Services = () => {
  const [selectedDest, setSelectedDest] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, [])

  const handleOpenDestination = (name) => {
    const dest = DestinationsData.find((d) => d.name === name) || {
      name,
      category: 'Top Destination',
      description: `Explore the breathtaking beauty of ${name}, Sri Lanka.`,
      bestTime: 'Dec to April',
      idealDays: '2 Days',
      topHighlights: ['Scenic Sightseeing', 'Cultural Tours', 'Local Cuisine']
    }
    setSelectedDest(dest)
    setIsModalOpen(true)
  }

  return (
    <>
      <section
        id="services"
        className="w-full bg-slate-200/70 lg:px-22 px-5 lg:py-24 py-20 flex flex-col justify-between lg:items-center items-start gap-4"
      >
        <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest text-center" data-aos="zoom-in" data-aos-delay="50">
          Must-Visit Places
        </span>
        <h2
          className="lg:text-5xl text-3xl font-fahkwang font-semibold text-gray-900 capitalize lg:text-center text-left"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          Discover Iconic Sri Lanka Destinations
        </h2>
        <p
          className="text-gray-600 lg:w-[60%] w-full lg:text-center text-left text-base"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Click any destination card below to explore travel tips, best seasons to visit, and curated itineraries.
        </p>
        <div className="w-16 h-1 bg-orange-600 rounded-full" data-aos="zoom-in" data-aos-delay="250"></div>

        {/* First Row of Destination Cards */}
        <div
          className="w-full flex lg:flex-row flex-col justify-between items-center gap-5 mt-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="lg:w-[50%] w-full flex lg:flex-row flex-col justify-between items-center gap-5">
            {/* Sigiriya */}
            <div
              onClick={() => handleOpenDestination('Sigiriya')}
              style={{ backgroundImage: `url(${Service1})` }}
              className="relative bg-cover bg-center w-full h-88 rounded-2xl p-6 flex justify-between items-end cursor-pointer group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:scale-105 transition-transform duration-500"></div>
              <span className="absolute top-4 left-4 bg-orange-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                UNESCO Site
              </span>
              <div className="relative z-10 w-full flex justify-between items-end">
                <div>
                  <h3 className="text-white text-2xl font-bold font-fahkwang group-hover:text-orange-400 transition-colors">
                    Sigiriya
                  </h3>
                  <p className="text-gray-300 text-sm">Cultural Wonder & Ancient Citadel</p>
                </div>
                <div className="bg-white/90 group-hover:bg-orange-600 group-hover:text-white text-gray-800 rounded-full p-3 transition shadow-md">
                  <FaInfoCircle className="text-lg" />
                </div>
              </div>
            </div>

            {/* Kandy */}
            <div
              onClick={() => handleOpenDestination('Kandy')}
              style={{ backgroundImage: `url(${Service2})` }}
              className="relative bg-cover bg-center w-full h-88 rounded-2xl p-6 flex justify-between items-end cursor-pointer group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:scale-105 transition-transform duration-500"></div>
              <span className="absolute top-4 left-4 bg-amber-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Sacred City
              </span>
              <div className="relative z-10 w-full flex justify-between items-end">
                <div>
                  <h3 className="text-white text-2xl font-bold font-fahkwang group-hover:text-orange-400 transition-colors">
                    Kandy
                  </h3>
                  <p className="text-gray-300 text-sm">Cultural Heritage & Tooth Relic</p>
                </div>
                <div className="bg-white/90 group-hover:bg-orange-600 group-hover:text-white text-gray-800 rounded-full p-3 transition shadow-md">
                  <FaInfoCircle className="text-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Ella */}
          <div className="lg:w-[50%] w-full">
            <div
              onClick={() => handleOpenDestination('Ella')}
              style={{ backgroundImage: `url(${Service3})` }}
              className="relative bg-cover bg-center w-full h-88 rounded-2xl p-6 flex justify-between items-end cursor-pointer group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:scale-105 transition-transform duration-500"></div>
              <span className="absolute top-4 left-4 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Mountain Haven
              </span>
              <div className="relative z-10 w-full flex justify-between items-end">
                <div>
                  <h3 className="text-white text-2xl font-bold font-fahkwang group-hover:text-orange-400 transition-colors">
                    Ella
                  </h3>
                  <p className="text-gray-300 text-sm">Nine Arch Bridge & Tea Mountains</p>
                </div>
                <div className="bg-white/90 group-hover:bg-orange-600 group-hover:text-white text-gray-800 rounded-full p-3 transition shadow-md">
                  <FaInfoCircle className="text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row of Destination Cards */}
        <div
          className="w-full flex lg:flex-row flex-col justify-between items-center gap-5 mt-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {/* Yala */}
          <div className="lg:w-[50%] w-full">
            <div
              onClick={() => handleOpenDestination('Yala')}
              style={{ backgroundImage: `url(${Service4})` }}
              className="relative bg-cover bg-center w-full h-88 rounded-2xl p-6 flex justify-between items-end cursor-pointer group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:scale-105 transition-transform duration-500"></div>
              <span className="absolute top-4 left-4 bg-yellow-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Wildlife Safari
              </span>
              <div className="relative z-10 w-full flex justify-between items-end">
                <div>
                  <h3 className="text-white text-2xl font-bold font-fahkwang group-hover:text-orange-400 transition-colors">
                    Yala
                  </h3>
                  <p className="text-gray-300 text-sm">Leopard Habitat & Elephant Safaris</p>
                </div>
                <div className="bg-white/90 group-hover:bg-orange-600 group-hover:text-white text-gray-800 rounded-full p-3 transition shadow-md">
                  <FaInfoCircle className="text-lg" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[50%] w-full flex lg:flex-row flex-col justify-between items-center gap-5">
            {/* Mirissa */}
            <div
              onClick={() => handleOpenDestination('Mirissa')}
              style={{ backgroundImage: `url(${Service5})` }}
              className="relative bg-cover bg-center w-full h-88 rounded-2xl p-6 flex justify-between items-end cursor-pointer group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:scale-105 transition-transform duration-500"></div>
              <span className="absolute top-4 left-4 bg-cyan-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Beach & Whales
              </span>
              <div className="relative z-10 w-full flex justify-between items-end">
                <div>
                  <h3 className="text-white text-2xl font-bold font-fahkwang group-hover:text-orange-400 transition-colors">
                    Mirissa
                  </h3>
                  <p className="text-gray-300 text-sm">Tropical Golden Coast & Surfing</p>
                </div>
                <div className="bg-white/90 group-hover:bg-orange-600 group-hover:text-white text-gray-800 rounded-full p-3 transition shadow-md">
                  <FaInfoCircle className="text-lg" />
                </div>
              </div>
            </div>

            {/* Galle */}
            <div
              onClick={() => handleOpenDestination('Galle')}
              style={{ backgroundImage: `url(${Service6})` }}
              className="relative bg-cover bg-center w-full h-88 rounded-2xl p-6 flex justify-between items-end cursor-pointer group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:scale-105 transition-transform duration-500"></div>
              <span className="absolute top-4 left-4 bg-rose-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Living Fortress
              </span>
              <div className="relative z-10 w-full flex justify-between items-end">
                <div>
                  <h3 className="text-white text-2xl font-bold font-fahkwang group-hover:text-orange-400 transition-colors">
                    Galle
                  </h3>
                  <p className="text-gray-300 text-sm">17th-Century Dutch Fort & Ocean Walls</p>
                </div>
                <div className="bg-white/90 group-hover:bg-orange-600 group-hover:text-white text-gray-800 rounded-full p-3 transition shadow-md">
                  <FaInfoCircle className="text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Modal */}
      <DestinationModal
        destination={selectedDest}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default Services