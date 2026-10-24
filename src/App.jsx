import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import CtaOne from './sections/CtaOne'
import Packages from './sections/Packages'
import Features from './sections/Features'
import Reviews from './sections/Reviews'
import Footer from './sections/Footer'
import FloatingWidgets from './components/FloatingWidgets'

const App = () => {
  return (
    <div className="min-h-screen bg-white font-poppins selection:bg-orange-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <CtaOne />
        <Packages />
        <Features />
        <Reviews />
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  )
}

export default App