import React, { useState, useEffect } from 'react'
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa'

const FloatingWidgets = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [tooltipVisible, setTooltipVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const defaultWhatsappMsg = encodeURIComponent(
    'Hello GoCeylon! 🌴 I am planning a trip to Sri Lanka and would like to ask some questions.'
  )
  const whatsappUrl = `https://wa.me/97779648818?text=${defaultWhatsappMsg}`

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="pointer-events-auto w-11 h-11 rounded-full bg-black/80 hover:bg-orange-600 text-white shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-pointer backdrop-blur-md"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}

      {/* Floating WhatsApp Button */}
      <div 
        className="pointer-events-auto relative group flex items-center"
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        {/* Tooltip */}
        <div className={`hidden sm:block absolute right-16 bg-gray-900 text-white text-xs font-medium py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap transition-all duration-200 ${tooltipVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'}`}>
          Need help? Chat with us on WhatsApp 🌴
        </div>

        {/* Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-pointer"
        >
          {/* Subtle pulse effect */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping"></span>
          <FaWhatsapp className="relative text-3xl" />
        </a>
      </div>
    </div>
  )
}

export default FloatingWidgets
