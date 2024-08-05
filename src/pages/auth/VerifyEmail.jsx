import React from 'react';
import logo from '../../assets/logo.png';
import getStarted from '../../assets/get-started.jpg'
import OTPInput from '../../components/auth/OTPInput';

const VerifyEmail = () => {
  return (
    <section className='h-screen grid grid-cols-[48%_52%]'>
      <div className='w-5/6 mx-auto py-8'>
        <img className="h-8" src={logo} alt="fico_logo" />
        <div id='header-container' className='mt-16'>
          <h3 className='text-3xl font-medium'>Verify Email Address</h3>
          <p className='mt-4 text-sm py-1'>Please enter the 6 digits code sent to <span className='text-[#43A047] ml-1'>user@email.com</span></p>
        </div>
        <p className='text-sm my-2 font-medium'>OTP</p>
        <OTPInput/>
      </div>

      <div id='img-container' className='h-screen relative'>
        <img className='object-cover h-full w-full' src={getStarted} alt="get_started" />
        <div className='bg-[#43A047]/[.70] absolute h-full w-full top-0 left-0 flex justify-center items-center'>
          <span className='w-3/4 border-y border-white py-8'>
            <p className='text-white text-5xl font-bold tracking-wide leading-[60px]'>Get Started on your farm management</p>
          </span>
        </div>
      </div>
    </section>
  )
}

export default VerifyEmail