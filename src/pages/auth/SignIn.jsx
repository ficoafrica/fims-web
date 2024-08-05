import React from 'react';
import logo from '../../assets/logo.png';
import getStarted from '../../assets/get-started.jpg';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const SignIn = () => {
  return (
    <section className='h-screen grid grid-cols-[48%_52%]'>
      <div className='w-5/6 mx-auto py-6'>
        <img className='h-8' src={logo} alt="fico_logo" />
        <div id='form-container' className='mt-10'>
          <h3 className='text-3xl font-medium'>Sign in</h3>
          <p className='mt-4 text-sm py-1'>Don't have an account? <span className='ml-2 text-[#43A047] border-b-2 border-[#43A047]'>Create Now</span></p>
          <div id='form-body' className='mt-8 w-4/6'>
            <form>
              <div className='mb-2 flex flex-col'>
                <label className='text-sm mb-2 font-medium' htmlFor="email">Email Address</label>
                <input className='p-1 border border-gray-300 text-sm rounded-md focus:outline-[#43A047]' type="email" name="email"/>
              </div>
              <div className='mb-2 flex flex-col'>
                <label className='text-sm mb-2 font-medium' htmlFor="password">Password</label>
                <input className='p-1 border border-gray-300 text-sm rounded-md focus:outline-[#43A047]' type="password" name="password"/>
              </div>
              <div className='mb-4 flex justify-end'>
                <span className='text-[#43A047] border-b-2 border-[#43A047] text-xs'>
                  Forgot Password?
                </span>
              </div>
              <div>
                <button className='w-full bg-[#43A047] py-2 text-sm text-white rounded-tr-md rounded-bl-md hover:bg-[#81ca84] hover:tracking-widest' type="submit">Sign in</button>
              </div>
            </form>
            <div id='social-login' className='mt-4'>
              <div className='flex flex-row'>
                <div className='mt-2 h-[2px] w-2/4 bg-gray-200'></div>
                <span className='px-1 mx-1 text-sm font-medium'>OR</span>
                <div className='mt-2 h-[2px] w-2/4 bg-gray-200'></div>
              </div>
              <button className='mt-4 w-full py-3 border border-gray-300 rounded-tr-md rounded-bl-md flex justify-center text-sm cursor-pointer'>
                <FcGoogle size={20}/> <p className='ml-3 font-medium'>Sign in with Google</p>
              </button>
              <button className='mt-4 w-full py-3 border border-gray-300 rounded-tr-md rounded-bl-md flex justify-center text-sm cursor-pointer'>
                <i className='text-blue-500'><FaFacebook size={20}/></i> <p className='ml-3 font-medium'>Sign in with Facebook</p>
              </button>
            </div>
          </div>
        </div>
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

export default SignIn