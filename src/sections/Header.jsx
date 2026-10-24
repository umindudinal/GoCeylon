import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'
import { Link } from 'react-scroll'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const menuLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Destinations', to: 'services' },
    { name: 'Packages', to: 'packages' },
    { name: 'Reviews', to: 'reviews' },
    { name: 'Contact', to: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    if (!menuOpen) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [menuOpen])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100vh'
    } else {
      document.body.style.overflow = ''
      document.body.style.height = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.height = ''
    }
  }, [menuOpen])

  return (
    <>
      {/* Header Bar */}
      <header
        className={`fixed top-0 left-0 w-full py-4 lg:px-22 px-6 transition-all duration-300 z-40 ${
          scrolled ? 'bg-black/85 backdrop-blur-md shadow-xl py-3.5' : 'bg-linear-to-b from-black/70 to-transparent'
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-orange-500 font-extrabold lg:text-3xl text-2xl font-fahkwang cursor-pointer flex items-center gap-1 tracking-tight"
          >
            GoCeylon<span className="text-white">.</span>
          </Link>

          {/* Mobile hamburger trigger */}
          <button
            className="text-white text-2xl md:hidden z-50 cursor-pointer p-1"
            onClick={() => setMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <FaBars />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8 text-base text-gray-200 font-medium font-poppins">
              {menuLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="text-orange-500 font-bold"
                    className="cursor-pointer hover:text-orange-500 transition-colors py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Quick Book Button */}
            <Link
              to="packages"
              smooth={true}
              duration={600}
              offset={-70}
              className="bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full cursor-pointer transition shadow-md hover:shadow-orange-600/40"
            >
              Book a Tour
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl text-white z-50 transform transition-transform duration-300 ease-out ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        } flex flex-col items-center justify-center`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-3xl p-2 cursor-pointer hover:text-orange-500 transition"
          aria-label="Close menu"
        >
          <IoCloseSharp />
        </button>

        <div className="text-orange-500 font-extrabold text-3xl font-fahkwang mb-8">
          GoCeylon<span className="text-white">.</span>
        </div>

        <ul className="flex flex-col space-y-6 text-xl text-center font-poppins">
          {menuLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer hover:text-orange-500 transition font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link
            to="packages"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setMenuOpen(false)}
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-full text-base transition shadow-lg cursor-pointer"
          >
            Explore Packages
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header