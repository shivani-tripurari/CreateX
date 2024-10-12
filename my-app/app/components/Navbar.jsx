"use client";
import Hamburger from 'hamburger-react';
import './nav.css';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo.svg';
import redirect from '../assets/whiteRedirect.svg';

import { useState } from 'react';
const Navbar = () => {

  const[open, setOpen]=useState(false);

  return (
    <div className='relative z-50 px-7 py-5 flex justify-between items-center'>
        <Link href='/'><Image src={logo} className='h-20 w-24'/></Link>
        <Hamburger
          color="black"
          size={28}
          toggled={open}
          toggle={setOpen}
        />
        {open && 
          <div className='text-xl text-white fixed static top-0 right-0 w-screen h-screen p-4 bg-[#daf6fb]'>
            <header className='flex justify-end items-center p-7 '>
                <Hamburger
                  color="black"
                  size={28}
                  toggled={open}
                  toggle={setOpen}
                />
            </header>
            <main className='flex items-start justify-center h-screen text-2xl font-bold text-black'>
              <ul className='p-7'>
                <Link href='/'><li className='p-7 hover:scale-125'>Home</li></Link>
                <Link href='/services'><li className='p-7 hover:scale-125'>Services</li></Link>
                <Link href='/clients'><li className='p-7 hover:scale-125'>Clients</li></Link>
                <Link href='/projects'><li className='p-7 hover:scale-125'>Projects</li></Link>
                <Link href='/'><li className='p-7 hover:scale-125'>Let's Collaborate</li></Link>
              </ul>
            </main>
          </div>
        }
    </div>
  )
}

export default Navbar


