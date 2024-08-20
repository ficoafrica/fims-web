import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { links, otherLinks } from '../../data/Data';

const Sidebar = () => {
  return (
    <div className='w-4/6 mx-auto py-4'>
      <img className='h-8' src={logo} alt="fico_logo"/>
      <ul className='mt-8 text-sm'>
        {links.map((item, index)=>{
          return (
            <li>
              <NavLink
                to={item.link}
                key={index}
                className={({isActive}) => (isActive ? 'text-green-500 flex flex-row py-4 px-3 bg-white rounded-md' : 'text-[#1E1E1E]/[.70] flex flex-row py-4 px-3')}
              >
              <i>{item.icon}</i> <span className='ml-2'>{item.name}</span>
              </NavLink>
            </li>
          )
        })}
      </ul>

      <ul className='mt-20 text-sm'>
      {otherLinks.map((item, index)=>{
          return (
            <li>
              <NavLink
                to={item.link}
                key={index}
                className={({isActive}) => (isActive ? 'text-green-500 flex flex-row py-4 px-3 bg-white rounded-md' : 'text-[#1E1E1E]/[.70] flex flex-row py-4 px-3')}
              >
              <i>{item.icon}</i> <span className='ml-2'>{item.name}</span>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar