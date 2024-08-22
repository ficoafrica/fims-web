import React from 'react';
import logo from '../../assets/logo.png';
import GetStarted from '../../components/auth/GetStarted';
import CreateFarm from '../../components/auth/CreateFarm';
import SelectFarm from '../../components/auth/SelectFarm';

import { useSelector } from 'react-redux';

const Workspace = () => {
  let {hasFarm} = useSelector((state) => state.auth)
  return (
    <section className='h-screen grid grid-cols-[48%_52%]'>
      <div className='w-5/6 mx-auto py-8'>
        <img className="h-8" src={logo} alt="fico_logo" />
        {
          hasFarm ? (
            <SelectFarm/>
          ) : (
            <CreateFarm/>
          )
        }
      </div>
      <GetStarted/>
    </section>
  )
}

export default Workspace