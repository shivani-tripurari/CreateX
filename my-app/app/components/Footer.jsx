import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.svg'
import mail from '../assets/mail.svg'
import phone from '../assets/phone.svg'
import location from '../assets/location.svg'

const Footer = () => {
  return (
    <div className='relative bg-gradient-image bg-cover bg-center bg-no-repeat'>
      <div className='z-10 text-[3rem] flex flex-col justify-center items-center'>
        <Image src={logo} className='h-32 w-24'/>
        <h1 className='text-2xl text-center md:text-4xl lg:text-5xl text-black'>Ready to bring your Vision to Life ?</h1>
        <h3 className='pt-3 pb-4 text-center text-base md:text-xl lg:text-2xl text-black/70'>reach out to us and let's start creating something exceptional.</h3>
        <div className='flex flex-row justify-center items-center gap-x-3'>
            <Image src={mail} className='h-8 w-8'/>
            <p className='text-sm lg:text-base font-semibold text-black/70'>createxdigital@gmail.com</p>
        </div>
        <div className='flex justify-center gap-x-12 items-center'>
            <div className='flex flex-row justify-center items-center gap-x-2'>
                <Image src={phone} className='h-7 w-7'/>
                <p className='text-sm lg:text-base font-semibold text-black/70'>9000922370</p>
            </div>
            <div className='flex flex-row justify-center items-center gap-x-2'>
                <Image src={phone} className='h-7 w-7'/>
                <p className='text-sm lg:text-base font-semibold text-black/70'>9652953658</p>
            </div>
        </div>
        <div className='pb-7 pt-2 flex flex-row justify-center items-center gap-x-3'>
            <Image src={location} className='h-7 w-7' />
            <p className='text-sm lg:text-base font-semibold text-black/70' >Hyderabad</p>
        </div>
      </div>
      {/* <div className=' overflow-hidden relative top-0 left-0 h-full w-full backdrop-blur-lg bg-[#daf6fb]'> */}
            {/* glass overlay--->gradient */}
            {/* <div className='blur-[120px] absolute -bottom-40 -right-7 h-[32rem] w-[36rem] bg-gradient-to-r from-yellow-200 via-lime-400 to-green-600 rounded-full'></div>
            <div className='blur-[240px] absolute -bottom-80 left-0 h-[30rem] w-[64rem] bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 rounded-full'></div>
            <div className='blur-2xl absolute top-0 -left-7 h-24 w-36 bg-gradient-to-r from-yellow-200 via-lime-400 to-green-600 rounded-full'></div>
        </div> */}
    </div>
  )
}

export default Footer
