import React from 'react'
import { Navbar } from '../components/Navbar'
import Hero from '../components/hero'
import Service from '../components/service'
import About from '../components/about'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Service/>
        <About/>
    </div>
  )
}
