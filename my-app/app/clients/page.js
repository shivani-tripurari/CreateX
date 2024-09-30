import React from 'react'
import { clientInfo } from '../data';
import Image from 'next/image';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

const page = () => {
  return (
    <>
    <div className='h-[340vh] md:h-[150vh] fold:h-[200vh] ipad-air:h-[100vh] xl:h-[144vh] bg-[#F5F5DC]'>
        <Navbar/>
        <div className='pt-10 p-7 flex flex-col justify-center items-center'>
            <h1 className='pt-10 text-black font-bold text-5xl p-3'>Trusted by Brands, Big and Small</h1>
            <h3 className='text-black font-regular text-xl p-3'>from Concept to Creation. Explore the magic behind every print we've brought to life.</h3>
        </div>
        <div className='p-7 flex justify-center items-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 ipad-air:grid-cols-2 xl:grid-cols-4 gap-4'>
                {clientInfo.map((item) => (
                    <div key={item.id} className='h-64 w-64 bg-white flex flex-col justify-center items-center'>
                        <Image src={item.imageUrl} className='h-12 w-30 object-contain' />
                        <h3 className='p-3 text-center text-black font-bold text-base md:text-lg xl:text-xl'>{item.title}</h3>
                        <p className='p-3 text-center text-black/70 font-regular text-base '>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

    </div>
    <Footer/>
    </>
  )
}

export default page
