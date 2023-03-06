import React from 'react'

const Card = ({Title,image}) => {
    return(
        <div>
            <img src={image} alt="" />
            <h1>{Title}</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, perferendis?</p>
            <button>Listen Now</button>
        </div>
    )
}

const Episodes = () => {
  return (
    <div>
        <h1>Recent Episodes</h1>
        <div className="flex">
            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black.</p>
            <button className='text-white bg-[#503AE7] px-8 py-5'>See All Episodes</button>
        </div>
        <div className='flex'>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Episodes