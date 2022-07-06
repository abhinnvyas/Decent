import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between w-screen p-2 h-14 bg-cyan-300 shadow-md'>
        <div>
            <h1 className="font-serif font-medium  text-xl md:text-xl 
            lg:text-2xl text-black">Decent</h1>
        </div>
        <div className="flex row space-x-2 p-2">
            <button className="bg-cyan-600 p-2 shadow-md text-white rounded-md 
            hover:shadow-xl transition-all active:scale-95">Login</button>
            <button className="bg-cyan-600 p-2 shadow-md text-white rounded-md 
            hover:shadow-xl transition-all active:scale-95">Register</button>
        </div>
    </div>
  )
}

export default Header