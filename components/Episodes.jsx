import React from 'react'
import Button from './Button'

const Card = ({Title,image}) => {
    return(
        <div className='basis-1/3 '>
            <img src={image} className="object-center object-cover w-full max-h-[256px]" alt="" />
            <h1 className='text-[24px] font-semibold leading-[30px] pt-10'>{Title}</h1>
            <p className='pt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, perferendis?</p>
            <div className='mt-4 flex items-center space-x-2 cursor-pointer'>
              <svg className='p-3 rounded-full box-content bg-[#503AE7] hover:bg-[#3E2DB2]' width="15" height="15" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.33337 5.99996L0.444486 11.6452L0.444487 0.354761L9.33337 5.99996Z" fill="white"/>
              </svg>
              <Button text="Listen Now"/>
          </div>
        </div>
    )
}

const Episodes = () => {
  return (
    <div className='mt-48'>
        <h1 className='text-[32px] font-bold'>Recent Episodes</h1>
        <div className="flex items-center justify-between mt-5 mb-12">
            <p className='basis-3/12'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black.</p>
            <button className='text-white bg-[#503AE7] hover:bg-[#3E2DB2] px-9 py-3'>See All Episodes</button>
        </div>
        <div className='flex space-x-5'>
            <Card image="/2.jpg" Title="Ep 1: How to build a world-class business brand"/>
            <Card image="/3.jpg" Title="Ep 2: Getting the first 100 customers for your business"/>
            <Card image="/1.jpg" Title="Ep 3: Should I raise money for my startup, or not?"/>
        </div>
    </div>
  )
}

export default Episodes