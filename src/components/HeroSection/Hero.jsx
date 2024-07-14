import React from 'react'
import './Hero.css';
function Hero() {
  return (
    <div className='bg-black w-full h-full flex flex-col items-center bg-cover bg-center hero py-14'>
        <div className='text-white border border-1 border-white px-3 py-2 rounded-full mt-40 '>
          BEST DIGITAL AGENCY
          </div>
        <div className='text-white font-bold text-8xl text-center px-60 leading-tight'>
          Empowering Brands In The Digital Age
          </div>
        <div className='text-white my-9 w-100 text-center text-xl leading-normal'>
        We can help convert your dreams into reality by bringing together <br /> strategy, design, and production to build you a strong online
          </div>
        <button className='text-black bg-custom-blue border border-1  px-11 py-4 rounded-full'>
          ORDER NOW
          </button>
    </div>
  )
}

export default Hero