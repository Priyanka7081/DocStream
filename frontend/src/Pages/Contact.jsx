import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      {/* Heading */}
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
          CONTACT <span className='text-gray-700 font-semibold'>US</span>
        </p>
      </div>

      {/* Image + Info Row */}
      <div className='my-10 flex flex-col md:flex-row items-center justify-center gap-10 mb-28 text-sm'>

        {/* Left: Image */}
        <img
          className='w-full md:max-w-[360px] rounded-lg'
          src={assets.contact_image}
          alt='contact'
        />

        {/* Right: Info */}
        <div className='max-w-[400px] space-y-3'>
          <p className='font-semibold text-lg text-gray-700'>OUR OFFICE</p>
          <p className='text-gray-600'>00000 Willms Station <br />Suite 000, Washington, USA</p>
          <p className='text-gray-600'>Tel: (000) 000-0000 <br />Email: greatstackdev@gmail.com</p>

          <p className='font-semibold text-lg text-gray-700 pt-2'>CAREERS AT PRESCRIPTO</p>
          <p>Learn more about our teams and job openings.</p>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700'>
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
