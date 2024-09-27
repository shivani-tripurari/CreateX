import React from 'react'
import Marquee from "react-fast-marquee";
import anurag from '../assets/anurag.svg'
// import ulogo from '../assets/ulogo.svg'
import vlogo from '../assets/vlogo.svg'
import ted from '../assets/tedlogo.svg'
import Image from 'next/image';
const Infinite = () => {
  return (
    <div className='p-7 bg-[#F5F5DC]'>
      <div className='pt-10 flex flex-col justify-center items-center'>
        <h1 className='pt-10 text-black font-bold text-5xl p-3' > Trusted by Brands, Big and Small</h1>
        <h3 className='text-black font-regular text-xl p-3' >collaborations that last</h3>
      </div>
      <Marquee pauseOnHover={true}>
        <Image src={anurag} className='h-32 w-52 px-10'/>
        <Image src={ted} className='h-32 w-52 px-10'/>
        <Image src={vlogo} className='h-32 w-52 px-10'/>
        <Image src={ted} className='h-32 w-52 px-10'/>
        <Image src={anurag} className='h-32 w-52 px-10'/>
        <Image src={vlogo} className='h-32 w-52 px-10'/>
        <Image src={ted} className='h-32 w-52 px-10'/>
      </Marquee>
      <Marquee pauseOnHover={true} direction='right'>
        <Image src={anurag} className='h-32 w-52 px-10'/>
        <Image src={ted} className='h-32 w-52 px-10'/>
        <Image src={vlogo} className='h-32 w-52 px-10'/>
        <Image src={ted} className='h-32 w-52 px-10'/>
        <Image src={anurag} className='h-32 w-52 px-10'/>
        <Image src={vlogo} className='h-32 w-52 px-10'/>
        <Image src={ted} className='h-32 w-52 px-10'/>
      </Marquee>
      <Marquee pauseOnHover={true}>
        <Image src={anurag} className='h-32 w-52 px-10'/>
        <Image src={ted} className='h-32 w-52 px-10'/>
        <Image src={vlogo} className='h-32 w-52 px-10'/>
        <Image src={ted} className='h-32 w-52 px-10'/>
        <Image src={anurag} className='h-32 w-52 px-10'/>
        <Image src={vlogo} className='h-32 w-52 px-10'/>
        <Image src={ted} className='h-32 w-52 px-10'/>
      </Marquee>
    </div>
  )
}

export default Infinite
