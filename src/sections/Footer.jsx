import React, { useState, useEffect } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { Link } from 'react-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, [])

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (newsletterEmail.trim()) {
      setSubscribed(true)
      setNewsletterEmail('')
      setTimeout(() => setSubscribed(false), 6000)
    }
  }

  return (
    <footer id="contact" className="w-full bg-slate-950 lg:px-22 px-6 pt-24 pb-12 flex flex-col justify-center items-center gap-14 text-white relative">
      {/* Top Newsletter Card (Floating overlapping banner) */}
      <div
        id="top"
        className="bg-linear-to-r from-[#046e8f] to-[#02495d] w-full lg:px-12 p-8 rounded-2xl flex lg:flex-row flex-col justify-between items-center -mt-36 gap-8 shadow-2xl border border-white/10"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="lg:w-[60%] w-full flex flex-col items-start gap-3">
          <span className="text-orange-400 font-bold text-xs uppercase tracking-wider">Stay Connected</span>
          <h2 className="text-2xl sm:text-3xl font-fahkwang font-bold text-white capitalize leading-snug">
            Crafting Unforgettable Sri Lanka Journeys, One Adventure at a Time
          </h2>
          <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
          <p className="text-gray-200 text-sm">
            Subscribe to our newsletter for exclusive seasonal tour deals, secret destination guides, and travel updates.
          </p>
        </div>

        <div className="lg:w-[40%] w-full">
          {subscribed ? (
            <div className="bg-emerald-500/20 border border-emerald-400 text-emerald-200 px-5 py-4 rounded-xl text-sm font-medium">
              ✓ Thank you for subscribing! Check your inbox for our latest Sri Lanka travel deals.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 w-full">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="bg-white/95 px-4 py-3.5 rounded-xl text-gray-900 placeholder-gray-500 text-sm outline-none flex-1 focus:ring-2 focus:ring-orange-500 shadow-inner"
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition cursor-pointer shadow-md shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div id="mid" className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-4">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="text-orange-500 font-extrabold text-3xl font-fahkwang">
            GoCeylon<span className="text-white">.</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your certified local travel partner dedicated to safe, authentic, and unforgettable journeys across the wonder of Sri Lanka.
          </p>
          <div className="space-y-2 pt-2 text-sm text-gray-300">
            <a
              href="mailto:umindudinal@gmail.com"
              className="flex items-center gap-3 hover:text-orange-500 transition"
            >
              <IoMail className="text-orange-500 text-lg shrink-0" /> umindudinal@gmail.com
            </a>
            <a
              href="tel:+97779648818"
              className="flex items-center gap-3 hover:text-orange-500 transition"
            >
              <FaPhoneAlt className="text-orange-500 text-base shrink-0" /> +97 77 964 8818
            </a>
            <a
              href="https://wa.me/97779648818"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-emerald-400 hover:text-emerald-300 transition"
            >
              <FaWhatsapp className="text-lg shrink-0" /> Chat on WhatsApp (24/7)
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold font-fahkwang text-white mb-4">Quick Links</h3>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li>
              <Link to="home" smooth duration={300} offset={-70} className="hover:text-orange-500 transition cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth duration={300} offset={-70} className="hover:text-orange-500 transition cursor-pointer">
                About Us
              </Link>
            </li>
            <li>
              <Link to="services" smooth duration={300} offset={-70} className="hover:text-orange-500 transition cursor-pointer">
                Destinations
              </Link>
            </li>
            <li>
              <Link to="packages" smooth duration={300} offset={-70} className="hover:text-orange-500 transition cursor-pointer">
                Tour Packages
              </Link>
            </li>
            <li>
              <Link to="reviews" smooth duration={300} offset={-70} className="hover:text-orange-500 transition cursor-pointer">
                Traveler Reviews
              </Link>
            </li>
            <li>
              <Link to="contact" smooth duration={300} offset={-70} className="hover:text-orange-500 transition cursor-pointer">
                Contact & Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Travel Services */}
        <div>
          <h3 className="text-lg font-semibold font-fahkwang text-white mb-4">Travel Services</h3>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li className="hover:text-gray-200 transition">Customized Tour Packages</li>
            <li className="hover:text-gray-200 transition">Chauffeured Airport Transfers</li>
            <li className="hover:text-gray-200 transition">Flight & Hotel Details</li>
            <li className="hover:text-gray-200 transition">Travel Insurance Guidance</li>
            <li className="hover:text-gray-200 transition">Visa Assistance (ETA Sri Lanka)</li>
            <li className="hover:text-gray-200 transition">Scenic Train Ticket Bookings</li>
          </ul>
        </div>

        {/* Socials & Working Hours */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold font-fahkwang text-white mb-2">Connect With Us</h3>
          <p className="text-gray-400 text-xs">
            Follow our daily travel stories and traveler photography across Sri Lanka:
          </p>
          <div className="flex gap-3 text-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-orange-600 flex items-center justify-center text-white transition cursor-pointer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-orange-600 flex items-center justify-center text-white transition cursor-pointer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-orange-600 flex items-center justify-center text-white transition cursor-pointer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-orange-600 flex items-center justify-center text-white transition cursor-pointer"
            >
              <FaTwitter />
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-gray-300 mt-4">
            <p className="font-semibold text-white">Opening Hours:</p>
            <p>Monday - Sunday: 24/7 Service</p>
            <p className="text-orange-400 text-[11px] mt-1">Always available for traveler emergencies</p>
          </div>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="w-full border-t border-gray-800/80 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
        <p>© {new Date().getFullYear()} GoCeylon. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Crafted with <span className="text-red-500">❤️</span> by{' '}
          <a
            href="https://github.com/umindudinal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline font-semibold"
          >
            Umindu Dinal
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer