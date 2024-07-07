import React from 'react'
import optechHiveLogo from "../../assets/images/optech-logo-512x512.png";

function Navbar() {
  return (
    <div className='flex bg-black w-full justify-around  items-center font-oswald'>
        <div className='logo w-28 '><img src={optechHiveLogo} alt="" /></div>
        <div className='nav flex text-white items-center justify-center w-100 '>
            <ul className='flex gap-16 justify-around border border-1 border-white h-5 px-1 py-6 items-center w-full rounded-full '>
                <li className='bg-custom-blue text-black px-7 py-2 rounded-full mx-1 '>HOME</li>
                <li className='mx-1'>ABOUT</li>
                <li className='mx-1'>SERVICES</li>
                <li className='mx-1'>BLOG</li>
                <li className=' mx-2'>CONTACT</li>
            </ul>
        </div>
        <div>
            <button className=' px-5 py-2 items-center justify-center bg-transparent border border-1 border-custom-blue text-white rounded-full'>GET STARTED</button>
        </div>
    </div>
  )
}

export default Navbar