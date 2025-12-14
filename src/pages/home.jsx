import React from 'react'
import { Navbar } from '../components/Navbar'
import Hero from '../components/hero'
import Service from '../components/service'
import About from '../components/about'
import Projects from '../components/Project'
import Footer from '../components/footer'
import Contact from '../components/contact'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Service/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}
