import React, { useState, useEffect, useCallback } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { MdOutlineDateRange, MdCheckCircle } from 'react-icons/md'
import { FaUsers, FaStar, FaWhatsapp, FaPlaneArrival, FaHotel, FaCar, FaUtensils, FaTicketAlt } from 'react-icons/fa'

const TourModal = ({ tour, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    travelers: '2',
    notes: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleClose = useCallback(() => {
    setSubmitted(false)
    onClose()
  }, [onClose])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleClose])

  if (!isOpen || !tour) return null

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const whatsappMessage = encodeURIComponent(
    `Hello GoCeylon! 🌴\nI am interested in booking the "${tour.name}" (${tour.price}/person, ${tour.days}).\nCould you please share availability and more details?`
  )
  const whatsappUrl = `https://wa.me/97779648818?text=${whatsappMessage}`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image with Overlay */}
        <div className="relative h-64 sm:h-72 w-full bg-cover bg-center" style={{ backgroundImage: `url(${tour.image})` }}>
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/30"></div>
          
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-orange-600 text-white flex items-center justify-center transition cursor-pointer shadow-lg"
            aria-label="Close modal"
          >
            <IoCloseSharp className="text-2xl" />
          </button>

          {/* Badges on image */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="bg-orange-600 text-white font-medium text-xs px-3 py-1.5 rounded-full shadow-md">
              {tour.category || 'Tour Package'}
            </span>
            <span className="bg-white/90 backdrop-blur-md text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
              <FaStar className="text-yellow-500" /> {tour.rating || '4.9'} ({tour.reviewsCount || 40}+ reviews)
            </span>
          </div>

          {/* Title on image */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-xs sm:text-sm text-orange-400 font-semibold tracking-wider uppercase mb-1">
              {tour.location || 'Sri Lanka'}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold font-fahkwang leading-tight">
              {tour.name}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-orange-50 border border-orange-100 rounded-xl text-center">
            <div>
              <p className="text-xs text-gray-500">Duration</p>
              <p className="text-base sm:text-lg font-bold text-gray-900 flex items-center justify-center gap-1 mt-0.5">
                <MdOutlineDateRange className="text-orange-600" /> {tour.days}
              </p>
            </div>
            <div className="border-x border-orange-200">
              <p className="text-xs text-gray-500">Group Size</p>
              <p className="text-base sm:text-lg font-bold text-gray-900 flex items-center justify-center gap-1 mt-0.5">
                <FaUsers className="text-orange-600" /> Up to {tour.pax}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Price / Person</p>
              <p className="text-base sm:text-lg font-extrabold text-orange-600 mt-0.5">
                {tour.price}
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-fahkwang">Experience Overview</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {tour.about}
            </p>
          </div>

          {/* Tour Highlights */}
          {tour.highlights && tour.highlights.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-fahkwang">Tour Highlights</h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {tour.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-700 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                    <MdCheckCircle className="text-emerald-500 text-lg shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Inclusions */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 font-fahkwang">What's Included</h3>
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
              <span className="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                <FaCar className="text-orange-600" /> Private AC Transport
              </span>
              <span className="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                <FaHotel className="text-orange-600" /> Star-Rated Hotels
              </span>
              <span className="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                <FaUtensils className="text-orange-600" /> Daily Breakfast
              </span>
              <span className="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                <FaTicketAlt className="text-orange-600" /> All Entrance Tickets
              </span>
              <span className="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                <FaPlaneArrival className="text-orange-600" /> Airport Pickup & Drop
              </span>
            </div>
          </div>

          {/* Booking / WhatsApp Section */}
          <div className="border-t border-gray-200 pt-6">
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-5 rounded-xl text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h4 className="font-bold text-lg">Inquiry Sent Successfully!</h4>
                <p className="text-sm text-emerald-700">
                  Thank you, <strong>{formData.name || 'Traveler'}</strong>. Our travel specialist will contact you at <strong>{formData.email}</strong> within 2 hours.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-3 inline-block bg-emerald-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Ready to Book or Have Questions?</h4>
                    <p className="text-xs text-gray-500">Instant response via WhatsApp or submit a quick booking inquiry.</p>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-3 rounded-xl transition shadow-md shrink-0 cursor-pointer text-sm"
                  >
                    <FaWhatsapp className="text-xl" /> Chat on WhatsApp
                  </a>
                </div>

                <form onSubmit={handleFormSubmit} className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-3">
                  <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Or send a quick booking request:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-gray-300 rounded-lg p-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-gray-300 rounded-lg p-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-white border border-gray-300 rounded-lg p-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <select
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full bg-white border border-gray-300 rounded-lg p-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="1">1 Traveler</option>
                      <option value="2">2 Travelers (Couple)</option>
                      <option value="3-5">3 - 5 Travelers (Family)</option>
                      <option value="6+">6+ Travelers (Group)</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-black text-white font-medium py-3 rounded-lg text-sm transition cursor-pointer shadow-md"
                  >
                    Submit Booking Request (No Advance Payment Required)
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourModal
