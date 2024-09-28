import React from 'react'
import Image from 'next/image'
import Services from '../components/Services.jsx'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'
const page = () => {
  return (
    <>
        <Navbar/>
        <Services/>
        <Footer/>
    </>
  )
}

export default page
