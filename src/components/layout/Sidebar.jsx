import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { links, otherLinks } from '../../data/navData';
import { useSelector } from 'react-redux';
import { useAuthContext } from '../../context/AuthContext';

const Sidebar = () => {
  let {activeFarm} = useSelector((state)=> state.auth);
  let {signOut} = useAuthContext();

  return (
    <div className='w-4/6 mx-auto py-4'>
      <img className='h-8' src={logo} alt="fico_logo"/>
      <ul className='mt-8 text-sm'>
        {links.map((item)=>{
          return (
            <li key={item.id}>
              <NavLink
                to={item.link + activeFarm}
                className={({isActive}) => (isActive ? 'text-green-500 flex flex-row py-4 px-3 bg-white rounded-md' : 'text-[#1E1E1E]/[.70] flex flex-row py-4 px-3')}
              >
              <i>{item.icon}</i> <span className='ml-2'>{item.name}</span>
              </NavLink>
            </li>
          )
        })}
      </ul>

      <ul className='mt-20 text-sm'>
        <li>
          <NavLink
            to={otherLinks[0].link}
            className={({isActive}) => (isActive ? 'text-green-500 flex flex-row py-4 px-3 bg-white rounded-md' : 'text-[#1E1E1E]/[.70] flex flex-row py-4 px-3')}
          >
          <i>{otherLinks[0].icon}</i> <span className='ml-2'>{otherLinks[0].name}</span>
          </NavLink>
        </li>

        <button className='text-[#1E1E1E]/[.70] flex flex-row py-4 px-3' onClick={()=> signOut()}>
        <i>{otherLinks[1].icon}</i> <span className='ml-2'>{otherLinks[1].name}</span>
        </button>
      </ul>
    </div>
  )
}

export default Sidebar