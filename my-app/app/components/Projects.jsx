import React from 'react'
import Image from 'next/image'
import img1 from '../assets/img1.svg';
import { projectInfo } from '../data';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className='h-[340vh] md:h-[150vh] fold:h-[200vh] ipad-air:h-[100vh] xl:h-[136vh] bg-[#FFFFFF]'>
        <div className='pt-10 p-7 flex flex-col justify-center items-center'>
            <h1 className='pt-10 text-black font-bold text-5xl p-3'>Crafted with Precision, Delivered with Passion.</h1>
            <h3 className='text-black font-regular text-xl p-3'>from Concept to Creation. Explore the magic behind every print we've brought to life.</h3>
            <h1 className='pt-3 text-black font-bold text-3xl p-3 uppercase'>Projects</h1>
        </div>
        <div className='p-7 flex justify-center items-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 ipad-air:grid-cols-2 xl:grid-cols-4 gap-4'>
                {projectInfo.map((item) => (
                    <div key={item.id} className='h-64 w-64 bg-black-700'>
                        <Image src={item.imgUrl} className='h-full w-full object-cover' />
                    </div>
                ))}
            </div>
            
        </div>
        <Link href='/projects'><h3 className='text-black block flex justify-center items-center '>View all</h3></Link>
    </div>
  )
}

export default Projects
