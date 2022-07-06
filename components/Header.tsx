import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between w-screen p-2 h-15 border-b-2
    bg-stone-700 shadow-lg'>
        <div>
          <a href="">
            <h1 className="font-serif font-medium  text-xl md:text-xl 
            lg:text-2xl text-white">Decent</h1>
          </a>
        </div>
        <div className="flex row space-x-2 p-2">
            <button className="bg-stone-500 p-2 shadow-sm text-white rounded-md 
            shadow-black hover:shadow-black hover:shadow-md hover:scale-105 transition-all 
            active:scale-95">Login</button>
            <button className="bg-stone-500 p-2 shadow-sm text-white rounded-md 
            shadow-black hover:shadow-black hover:shadow-md hover:scale-105 transition-all 
            active:scale-95">Register</button>
        </div>
    </div>
  )
}

export default Header