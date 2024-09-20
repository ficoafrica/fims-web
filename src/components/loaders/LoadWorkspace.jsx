import React from 'react'

const LoadWorkspace = () => {
  return (
    <div role="status" className="w-4/6 animate-pulse">
      <div className="flex flex-row w-full mt-4 py-6 px-4 bg-gray-100 rounded-md dark:bg-gray-700">
        <div className='h-6 w-6 bg-gray-300 rounded-md dark:bg-gray-700'></div>
        <div className='mt-2 ml-4 h-2.5 w-2/3 bg-gray-300 rounded-full'></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default LoadWorkspace