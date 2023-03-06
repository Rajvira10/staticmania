import React from 'react'

const Hero = () => {
  return (
    <div className='flex w-10/12 mx-auto mt-28 justify-between'>
        <div className="basis-2/5">
            <h1 className='text-[48px] font-bold leading-[52.8px]'>Become The Hero Of Your Own Story</h1>
            <p className='mt-6 leading-[28px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis repellat repudiandae blanditiis rem nobis doloribus unde quo sed cumque!</p>
            <div className='flex mt-8'>
                <input type="text" placeholder='Enter Your Email Id' className='bg-[#F4F2FF] placeholder-[#AFB0B9] text-black px-6 py-2 w-11/12 outline-none border-none'/>
                <button className='bg-[#503AE7] hover:bg-[#3E2DB2] font-bold text-[18px]  text-white px-6 py-2 '>Subscribe</button>
            </div>
            
        </div>
        <div className="right flex space-x-14 items-center basis-2/5">
            <div className="blue bg-[#503AE7] h-[99px] w-[32px]"></div>
            <div className="green bg-[#1AD993] w-[32px] h-[256px]"></div>
            <div className="blue bg-[#503AE7] w-[32px] h-[178px]"></div>
            <div className="green bg-[#1AD993] w-[32px] h-[99px]"></div>
            <div className="blue bg-[#503AE7] w-[32px] h-[256px]"></div>
            <div className="green bg-[#1AD993] w-[32px] h-[178px]"></div>
        </div>
    </div>
  )
}

export default Hero