import React from 'react';
import getStarted from '../../assets/get-started.jpg'

const GetStarted = () => {
  return (
    <div id='img-container' className='h-screen relative'>
        <img className='object-cover h-full w-full' src={getStarted} alt="get_started" />
        <div className='bg-[#43A047]/[.70] absolute h-full w-full top-0 left-0 flex justify-center items-center'>
          <span className='w-3/4 border-y border-white py-8'>
            <p className='text-white text-5xl font-bold tracking-wide leading-[60px]'>Get Started on your farm management</p>
          </span>
        </div>
      </div>
  )
}

export default GetStarted