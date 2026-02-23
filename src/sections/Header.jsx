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
    { name: 'Services', to: 'services' },
    { name: 'Packages', to: 'packages' },
    { name: 'Contact', to: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
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
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full py-4 lg:px-25 px-7 transition-all duration-300 z-40 ${scrolled ? 'bg-black/70 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="flex justify-between items-center">
          <div className="text-orange-600 font-bold lg:text-4xl text-3xl">GoCeylon <span className="text-white">.</span></div>
          <button className="text-white text-2xl md:hidden z-50 cursor-pointer" onClick={() => setMenuOpen(true)}>
            <FaBars />
          </button>
          <nav className="hidden md:block">
            <ul className="flex space-x-10 text-lg text-white font-poppins">
              {menuLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-80}
                    className="cursor-pointer hover:text-orange-600 transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black text-white z-60 transform transition-transform duration-300 ease-out ${menuOpen ? 'translate-y-0' : '-translate-y-full'} flex items-center justify-center`}>
        <IoCloseSharp className="absolute top-6 right-6 text-3xl cursor-pointer z-70" onClick={() => setMenuOpen(false)} />
        <ul className="flex flex-col space-y-8 text-2xl text-center font-poppins">
          {menuLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer hover:text-orange-600 transition">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Header