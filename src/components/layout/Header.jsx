import React from 'react';
import { IoNotifications } from "react-icons/io5";
import { useSelector } from 'react-redux';

const Header = () => {
  let {user} = useSelector((state)=> state.auth)
  let role;
  if (user.role === 1){
    role = 'Manager'
  } else if( user.role === 2){
    role = 'Deputy'
  } else {
    role = 'Worker';
  }
  
  return (
    <header className='h-20 py-4 px-6'>
      <div className='flex justify-between'>
        <div className='w-1/2'>
          <input className='bg-[#43A047]/[.10] h-12 w-3/4 outline-none rounded-full px-4 text-sm' type="text" placeholder='Search...' />
        </div>
        <div className='w-1/2 flex flex-row justify-end'>
          <span className='bg-[#43A047]/[.10] p-4 rounded-full'>
            <i><IoNotifications size={16}/></i>
          </span>
          <span className='bg-[#43A047]/[.10] ml-4 w-1/2 h-12 rounded-full px-4 py-1'>
            <span className='text-sm'>
              <h3>{user.username}</h3>
              <p className='text-[#1E1E1E]/[.50]'>{role}</p>
            </span>
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header