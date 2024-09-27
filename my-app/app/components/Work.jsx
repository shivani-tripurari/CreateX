import React from 'react'
import Image from 'next/image'
import star1 from '../assets/star1.svg';
import star2 from '../assets/star2.svg';
import redirect from '../assets/redirect.svg';

const Work = ({ workText = "",full="", items = [] }) => {
  return (
    <>
    <div className="flex justify-center items-center relative top-10 left-0">
      <div className="mt-2 mb-2 overflow-hidden group h-64 w-[84rem] bg-[#171717] border-2 border-white flex flex-row justify-evenly items-center">
        <div className="absolute h-full w-full">
          <Image src={star2} className="hidden h-4 w-4 absolute top-16 left-[30rem] group-hover:block"/>
          <Image src={star1} className="hidden h-8 w-8 absolute bottom-16 left-40 group-hover:block" />
          <Image src={redirect} className="hidden h-6 w-6 absolute top-4 right-5 group-hover:block"/>
        </div>
        <div className=" transition duration-500 ease-in-out font-outline-2 font-semibold text-[16rem] mx-7 group-hover:scale-[1.7] group-hover:font-bold group-hover:-translate-x-28 group-hover:font-outline-1">{workText}</div>
        <div className="flex flex-col justify-center gap-x-7 items-left">
          <h1 class="transition duration-500 ease-in-out text-4xl text-[#fefefe] font-bold group-hover:scale-75 group-hover:bg-gradient-to-r group-hover:from-[#5B8CC0] group-hover:to-[#BAD432] inline-block group-hover:text-transparent group-hover:bg-clip-text">{full}</h1>
          <ul className="transition duration-500 ease-in-out text-lg text-slate-200 ml-7 pt-7 list-disc group-hover:scale-75 group-hover:text-slate-300">
            {items.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>  
  )
}

export default Work
