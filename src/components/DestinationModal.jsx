import React, { useEffect } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { FaCalendarAlt, FaClock, FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-scroll'

const DestinationModal = ({ destination, isOpen, onClose, onExploreTours }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
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
  }, [isOpen, onClose])

  if (!isOpen || !destination) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/30 hover:bg-black text-white flex items-center justify-center transition cursor-pointer"
            aria-label="Close"
          >
            <IoCloseSharp className="text-xl" />
          </button>
          
          <div className="flex items-center gap-2 text-orange-200 text-xs font-semibold uppercase tracking-wider mb-1">
            <FaMapMarkerAlt /> Sri Lanka Destination
          </div>
          <h2 className="text-3xl font-bold font-fahkwang">{destination.name}</h2>
          <span className="inline-block mt-2 bg-white/20 backdrop-blur-md text-xs font-medium px-3 py-1 rounded-full">
            {destination.category} • {destination.tag || 'Must Visit'}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 space-y-5">
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {destination.description}
          </p>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 gap-3 p-3.5 bg-orange-50/70 border border-orange-100 rounded-xl text-sm">
            <div className="flex items-center gap-2.5">
              <FaCalendarAlt className="text-orange-600 text-base shrink-0" />
              <div>
                <p className="text-xs text-gray-500 font-medium">Best Time</p>
                <p className="font-semibold text-gray-800">{destination.bestTime || 'Year Round'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 border-l border-orange-200 pl-3">
              <FaClock className="text-orange-600 text-base shrink-0" />
              <div>
                <p className="text-xs text-gray-500 font-medium">Recommended</p>
                <p className="font-semibold text-gray-800">{destination.idealDays || '1 - 2 Days'}</p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          {destination.topHighlights && destination.topHighlights.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2.5">
                Top Experiences & Highlights
              </h4>
              <div className="space-y-2">
                {destination.topHighlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCheckCircle className="text-emerald-500 text-sm shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action */}
          <div className="pt-2">
            <Link
              to="packages"
              smooth={true}
              duration={600}
              offset={-80}
              onClick={() => {
                onClose()
                if (onExploreTours) onExploreTours(destination.name)
              }}
              className="w-full flex items-center justify-center bg-orange-600 hover:bg-black text-white font-semibold py-3 px-6 rounded-xl transition cursor-pointer shadow-md text-sm text-center"
            >
              Explore {destination.name} Tour Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationModal
