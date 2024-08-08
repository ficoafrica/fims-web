import React from 'react';
import logo from '../../assets/logo.png';
import GetStarted from '../../components/auth/GetStarted';
// import CreateFarm from '../../components/auth/CreateFarm';
import SelectFarm from '../../components/auth/SelectFarm';

const Workspace = () => {
  return (
    <section className='h-screen grid grid-cols-[48%_52%]'>
      <div className='w-5/6 mx-auto py-8'>
        <img className="h-8" src={logo} alt="fico_logo" />
        <SelectFarm/>
      </div>

      <GetStarted/>
    </section>
  )
}

export default Workspace