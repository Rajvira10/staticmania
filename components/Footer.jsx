import React from 'react'
import Sponsor from './Sponsor'

const Footer = () => {
  return (
    <div className='mt-32 mx-auto relative'>
      <Sponsor/>
      <div className='h-28'></div>
      <div className='h-[574px] bg-[#14142B] mt-20'>
        <div className='flex'>
          <h1>{"{Finsweet"}</h1>
          <div>
            <h1>Pages</h1>
            <ul>
              <li>Home</li>
              <li>Podcast</li>
              <li>Host</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h1>Reach Us</h1>
            <ul>
              <li>Contact</li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='h-[64px] text-white flex justify-center items-center bg-[#503AE7]'>
        <p>&copy; Copyright Finsweet 2021</p>
      </div>
    </div>
  )
}

export default Footer