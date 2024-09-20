import React from 'react'

const LoadHeader = () => {
  return (
    <div role='status' className='h-20 py-4 px-6 animate-pulse'>
      <div className='flex justify-between'>
        <div className='w-1/2'>
          <div className='bg-gray-200 h-12 w-3/4 rounded-full'></div>
        </div>
        <div className='w-1/2 flex flex-row justify-end'>
          <div className='bg-gray-200 h-12 w-12 rounded-full'>
          </div>
          <div className='bg-gray-200 ml-4 w-1/2 h-12 rounded-full'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadHeader