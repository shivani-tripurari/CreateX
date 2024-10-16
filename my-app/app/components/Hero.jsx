import React from 'react'
import Navbar from './Navbar.jsx'

const Hero = () => {
  return (
    <div className='relative pb-40 lg:pb-80 bg-gradient-image bg-cover bg-center bg-no-repeat'>
        {/* navbar */}
        <div>
            <Navbar/>
        </div>

        <div className='relative z-20 py-[10vh] px-4 pl-20'>
            <div className='p-4 border-slate-700 border-l-4'> 
            {/* text */}
            <h1 className='text-4xl lg:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-stone-950 to-50% to-stone-800'>We are a Creative Agency, shaping experiences that</h1>
            <div className="font-semibold text-3xl lg:text-3xl md:text-2xl "><span className="text-purple-700 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                <ul className=" block animate-text-slide-3 text-left leading-tight [&_li]:block">
                    <li>leave lasting impressions.</li>
                    <li>help you stand out in style.</li>
                    <li>make your brand unforgettable.</li>
                    <li aria-hidden="true">leave lasting impressions.</li>
                </ul>
            </span></div>
            </div>
            <div>
                <h3 className='text-lg w-3/4 lg:w-5/6 md:w-5/6 md:text-2xl lg:text-2xl text-black mt-3 ml-7 lg:ml-4 lg:pl-7'>Custom creations that inspire and connect.</h3>
                <button type="button" class="ml-7 lg:ml-11 mt-7 p-7 focus:outline-none text-white font-bold bg-purple-200 hover:bg-purple-300 focus:ring-4 focus:ring-purple font-bold rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Reach out</button>
            </div>
        </div>
        
        {/* <div className=' overflow-hidden absolute top-0 left-0 h-full w-full backdrop-blur-lg bg-[#daf6fb]'> */}
            {/* glass overlay--->gradient */}
            {/* <div className='blur-[120px] absolute -bottom-40 -right-7 h-[32rem] w-[36rem] bg-gradient-to-r from-yellow-200 via-lime-400 to-green-600 rounded-full'></div>
            <div className='blur-[240px] absolute -bottom-80 left-0 h-[30rem] w-[64rem] bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 rounded-full'></div>
            <div className='blur-2xl absolute top-0 -left-7 h-24 w-36 bg-gradient-to-r from-yellow-200 via-lime-400 to-green-600 rounded-full'></div>
        </div> */}
      
    </div>
  )
}

export default Hero
