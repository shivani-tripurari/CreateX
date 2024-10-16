import React from 'react'
import Work from './Work.jsx';
import Image from 'next/image';
import redirect2 from '../assets/redirect2.svg'
const Services = () => {
  return (
    <div className='pb-10 mb-10 bg-[#F5F5DC]'>
        <div className='pt-10 p-7 flex flex-col justify-center items-center'>
            <h1 className='pt-10 text-black font-bold text-5xl p-3'>Bringing Your Ideas to Life with Crafted Excellence.</h1>
            <h3 className='text-black font-regular text-xl p-3'>discover our range of services that go beyond the ordinary.</h3>
        </div>
        <Work 
            workText='CP'
            full='Customized Printing'
            items={[
                "T-shirts & Hoodies",
                "Welcome kits",
                "Keychains",
                "Sipper bottles",
                "Festival kits"
            ]}      
        />
        <Work 
            workText='EB'
            full='Event Branding'
            items={[
                "Boards",
                "Flexs",
                "Welcome archs",
            ]}      
        />
        <Work 
            workText='DS'
            full='Designing'
            items={[
                "Logos",
                "Id cards",
                "Certificates",
                "All types of designing"
            ]}      
        />
        <Work 
            workText='CB'
            full='Corporate Branding'
            items={[
                "T-shirts & Hoodies",
                "Welcome kits",
                "Keychains",
                "Sipper bottles",
                "Festival kits"
            ]}      
        />
       <div className='flex justify-center items-center'>
       <div className='group flex flex-row justify-center items-center gap-x-3 mt-20  mb-1 h-12 w-[90%] md:w-[90%] fold:w-[90%] ipad-air:w-[90%] xl:w-[98%]  border-2 border-[#171717]'>
            <h3 className='transition duration-500 ease-in-out text-[#171717] text-base font-semibold group-hover:scale-125'>Explore now</h3>
            <Image src={redirect2} className='transition duration-500 ease-in-out group-hover:scale-125 group-hover:translate-x-2' />
        </div>
       </div>
    </div>
  )
}

export default Services
