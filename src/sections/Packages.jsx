import React, { useState, useEffect } from 'react'
import { Tourpackages } from '../export'
import { MdOutlineDateRange, MdSearch } from 'react-icons/md'
import { FaUsers, FaStar, FaEye, FaWhatsapp } from 'react-icons/fa'
import TourModal from '../components/TourModal'
import AOS from 'aos'
import 'aos/dist/aos.css'

const categories = [
  { label: 'All Packages', value: 'all' },
  { label: 'Cultural', value: 'Culture' },
  { label: 'Hill Country', value: 'Hill Country' },
  { label: 'Wildlife Safari', value: 'Safari' },
  { label: 'Beach Escape', value: 'Beach' },
  { label: 'Grand Highlights', value: 'Highlights' },
]

const Packages = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTour, setSelectedTour] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, [])

  const filteredPackages = Tourpackages.filter((pkg) => {
    const matchesCategory =
      selectedCategory === 'all' || pkg.category === selectedCategory
    const query = searchQuery.toLowerCase().trim()
    const matchesQuery =
      query === '' ||
      pkg.name.toLowerCase().includes(query) ||
      pkg.about.toLowerCase().includes(query) ||
      (pkg.location && pkg.location.toLowerCase().includes(query))
    return matchesCategory && matchesQuery
  })

  const openTourModal = (pkg) => {
    setSelectedTour(pkg)
    setIsModalOpen(true)
  }

  return (
    <>
      <section
        id="packages"
        className="w-full bg-slate-100 flex flex-col justify-center items-center gap-10 lg:px-22 px-5 lg:py-24 py-20"
      >
        {/* Header */}
        <div
          id="top"
          className="w-full flex lg:flex-row flex-col justify-between items-start lg:items-end lg:gap-20 gap-6"
        >
          <div className="lg:w-1/2">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">
              Curated Itineraries
            </span>
            <h2
              className="lg:text-5xl text-3xl font-fahkwang font-semibold text-gray-900 capitalize mt-2"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              Explore Our Popular Sri Lanka Tour Packages
            </h2>
          </div>
          <div
            className="lg:w-1/2 flex flex-col justify-between items-start gap-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <p className="text-gray-600 text-left">
              Discover flexible, all-inclusive island tours designed to give you
              unforgettable memories — from ancient UNESCO citadels and mist-clad
              mountains to golden beaches and leopard safaris.
            </p>
            <div className="w-16 h-1 bg-orange-600 rounded-full"></div>
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div
          className="w-full flex flex-col md:flex-row items-center justify-between gap-4 mt-2"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search destination or tour..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white rounded-full text-sm text-gray-800 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="w-full flex justify-between items-center text-xs sm:text-sm text-gray-500 -mt-4">
          <span>
            Showing <strong>{filteredPackages.length}</strong> of{' '}
            <strong>{Tourpackages.length}</strong> tour packages
          </span>
          {(selectedCategory !== 'all' || searchQuery !== '') && (
            <button
              onClick={() => {
                setSelectedCategory('all')
                setSearchQuery('')
              }}
              className="text-orange-600 hover:underline font-medium cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Cards Grid */}
        <div id="bottom" className="w-full">
          {filteredPackages.length === 0 ? (
            <div className="w-full bg-white rounded-2xl p-12 text-center space-y-4 shadow-sm border border-gray-200">
              <p className="text-gray-500 text-base">
                No tour packages matched your search criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSearchQuery('')
                }}
                className="bg-orange-600 hover:bg-black text-white px-6 py-2.5 rounded-lg text-sm font-medium transition cursor-pointer"
              >
                View All Packages
              </button>
            </div>
          ) : (
            <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              {filteredPackages.map((item) => (
                <div
                  key={item.id || item.name}
                  className="w-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-gray-200/80 group"
                >
                  {/* Image box with badges */}
                  <div
                    style={{ backgroundImage: `url(${item.image})` }}
                    className="bg-cover bg-center h-64 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/20 group-hover:scale-105 transition-transform duration-500"></div>

                    {/* Price Badge */}
                    <div className="bg-orange-600 text-white absolute top-3 left-3 px-3 py-1.5 rounded-xl shadow-lg flex flex-col items-center">
                      <span className="text-lg font-bold leading-none">
                        {item.price}
                      </span>
                      <span className="text-[10px] uppercase font-light opacity-90">
                        / Person
                      </span>
                    </div>

                    {/* Category & Rating Badges */}
                    <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
                      <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                        {item.category || 'Package'}
                      </span>
                      <span className="bg-white/95 text-gray-900 text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                        <FaStar className="text-yellow-500 text-xs" />{' '}
                        {item.rating || '4.9'}
                      </span>
                    </div>

                    {/* Location Tag on bottom of image */}
                    {item.location && (
                      <div className="absolute bottom-3 left-3 text-white text-xs font-medium drop-shadow-md">
                        📍 {item.location}
                      </div>
                    )}
                  </div>

                  {/* Content Box */}
                  <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                    <div>
                      <h3 className="text-xl text-gray-900 font-fahkwang font-semibold group-hover:text-orange-600 transition-colors line-clamp-1">
                        {item.name}
                      </h3>

                      {/* Duration & Pax */}
                      <div className="flex items-center gap-5 mt-3 text-xs sm:text-sm text-gray-600">
                        <span className="flex items-center gap-1.5">
                          <MdOutlineDateRange className="text-orange-600 text-lg" />
                          <span>{item.days}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FaUsers className="text-orange-600 text-base" />
                          <span>Up to {item.pax} Pax</span>
                        </span>
                      </div>

                      <hr className="w-full border-gray-100 my-3" />

                      <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed">
                        {item.about}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-2">
                      <button
                        onClick={() => openTourModal(item)}
                        className="flex-1 flex items-center justify-center gap-2 bg-orange-600 hover:bg-black text-white px-4 py-3 font-semibold text-sm rounded-xl transition cursor-pointer shadow-md"
                      >
                        <FaEye /> {item.btn || 'View Tour Detail'}
                      </button>
                      <a
                        href={`https://wa.me/97779648818?text=${encodeURIComponent(
                          `Hi GoCeylon! I would like to book the "${item.name}" (${item.price}, ${item.days}).`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-xl transition shadow-md cursor-pointer"
                        title="Book via WhatsApp"
                      >
                        <FaWhatsapp className="text-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Interactive Tour Detail Modal */}
      <TourModal
        tour={selectedTour}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default Packages