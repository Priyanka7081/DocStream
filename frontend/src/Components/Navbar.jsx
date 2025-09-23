import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)
  return (
    <div className='flex items-center justify-between text-sm py-4
    mb-5 border-b border-b-gray-400'>
      {/* Logo */}
      <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="Logo" />
 

      {/* Navigation */}
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to="/"><li className='py-1'>HOME</li>
        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden  '/></NavLink>
        <NavLink to="/doctors"><li className='py-1'>ALL DOCTORS</li>
        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden  '/></NavLink>
        <NavLink to="/about"><li className='py-1'>ABOUT</li>
        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden  '/></NavLink>
        <NavLink to="/contact"><li className='py-1'>CONTACT</li>
        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden  '/></NavLink>
        
      </ul>

      {/* Button */}
      <div className='flex items-center gap-4'>
        {
          token
           ? <div className='flex items-center gap-2 cursor-pointer relative group'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt="profile" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="drop" />
            <div className='absolute top-1 right-0 pt-14 text-base
             font-medium text-black-600 z-20 hidden group-hover:block 
               '>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={()=>navigate('my-profile')} className="cursor-pointer hover:text-blue-600">My Profile</p>
                <p onClick={()=>navigate('my-appointment')} className="cursor-pointer hover:text-blue-600">My Appointment</p>
                <p onClick={() =>setToken(false)} className="cursor-pointer hover:text-blue-600">Logout</p>
              </div>
            </div>
           </div>
           :  <button onClick={()=>navigate('/login')} className='bg-blue-600 text-white py-3 px-8 
               rounded-full font-light  hidden md:block'>Create Account</button>
        }
      
      </div>
    </div>
  )
}

export default Navbar
