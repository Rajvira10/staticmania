import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex pt-5 items-center justify-between w-11/12 mx-auto'>
        <Link href="/" className='font-bold text-[32px]'>{"{Finsweet"}</Link>
        <Link href="/about" className='text-[16px]'>About</Link>
    </nav>
  )
}

export default Navbar