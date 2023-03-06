import React from 'react'
import Button from './Button'

const Articles = () => {
  return (
    <div className='flex space-x-4 mt-32'>
        <div className="basis-1/3 bg-[#F4F2FF] pt-10  h-[516px] w-full relative overflow-hidden">
          <div className='px-10'><h1 className='text-[32px] font-bold leading-[38.4px] pb-5'>Read our <br /> articles & news</h1>
            <Button text="See More"/>
          </div>
          <div className='absolute bg-[#503AE7] h-[242.45px] w-[74.43px] rotate-45 translate-y-20 translate-x-8'></div>
          <div className='absolute bg-[#1AD993] h-[714.9px] w-[74.43px] rotate-45 -translate-y-20 translate-x-40'></div>  
          <div className='absolute bg-[#503AE7] h-[1350px] w-[74.43px] rotate-45'></div>    

        </div>
        <div className="basis-1/3">
            <img src="4.jpg" className='object-center object-cover w-full h-[320px]' alt="" />
            <h1 className='font-semibold text-[24px] leading-[30px] pt-8'>Getting the first 100 customers for your business</h1>
            <p className='pt-5 pb-2'>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
            <Button text="Read Now"/>
        </div>
        <div className="basis-1/3">
            <img src="5.jpg" className='object-center object-cover w-full h-[320px]' alt="" />
            <h1 className='font-semibold text-[24px] leading-[30px] pt-8'>Apparently we had reached a great height in the atmosphere, ...</h1>
            <p className='pt-5 pb-2'>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
            <Button text="Read Now"/>        
        </div>
    </div>
  )
}

export default Articles