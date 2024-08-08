import React from 'react'

const CreateFarm = () => {
  return (
    <div className='mt-16'>
      <h3 className='text-3xl font-medium'>Create a Farm Workspace</h3>
      <p className='mt-4 text-sm py-1'>Please create a farm workspace to proceed</p>
      <div className='mt-8 w-4/6'>
        <div className='mb-4 flex flex-col'>
          <label className='text-sm mb-2 font-medium' htmlFor="name">Farm Name</label>
          <input className='p-1 border border-gray-300 text-sm rounded-md focus:outline-[#43A047]' type="name" name="name"/>
        </div>
        <div>
          <button className='w-full bg-[#43A047] py-2 text-sm text-white rounded-tr-md rounded-bl-md hover:bg-[#81ca84] hover:tracking-widest' type="submit">Create</button>
        </div>
      </div>
    </div>
  )
}

export default CreateFarm