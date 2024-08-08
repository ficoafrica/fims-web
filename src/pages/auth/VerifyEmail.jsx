import React from 'react';
import logo from '../../assets/logo.png';
import OTPInput from '../../components/auth/OTPInput';
import GetStarted from '../../components/auth/GetStarted';

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

      <GetStarted/>
    </section>
  )
}

export default VerifyEmail