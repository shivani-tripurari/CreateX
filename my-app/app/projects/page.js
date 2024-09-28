import React from 'react'
import Image from 'next/image'
import Projects from '../components/Projects.jsx'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'

const page = () => {
  return (
    <>
        <Navbar/>
        <Projects/>
        <Footer/>
    </>
  )
}

export default page
