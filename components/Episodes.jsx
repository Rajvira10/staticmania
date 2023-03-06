import React from 'react'
import Button from './Button'

const Card = ({Title,image}) => {
    return(
        <div className='basis-1/3 '>
          <svg className='cursor-pointer z-10 absolute ml-[27%] mt-[1%] bg-[#503AE7] p-2 rounded-full box-content' width="15" height="15" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 7V8C13.998 9.68185 13.3906 11.3068 12.2888 12.5775C11.187 13.8482 9.6646 14.6797 8 14.92V18H11V20H3V18H6V14.92C4.3354 14.6797 2.81295 13.8482 1.71118 12.5775C0.609407 11.3068 0.00197111 9.68185 0 8V7H2V8C2 9.32608 2.52678 10.5979 3.46447 11.5355C4.40215 12.4732 5.67392 13 7 13C8.32608 13 9.59785 12.4732 10.5355 11.5355C11.4732 10.5979 12 9.32608 12 8V7H14ZM7 11C7.79565 11 8.55871 10.6839 9.12132 10.1213C9.68393 9.55871 10 8.79565 10 8V3C10 2.20435 9.68393 1.44129 9.12132 0.87868C8.55871 0.316071 7.79565 0 7 0C6.20435 0 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3V8C4 8.79565 4.31607 9.55871 4.87868 10.1213C5.44129 10.6839 6.20435 11 7 11Z" fill="white"/>
          </svg>
          <div className='relative'>
          <img src={image} className=" object-center object-cover w-full max-h-[256px]" alt="" />
          </div>
            

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