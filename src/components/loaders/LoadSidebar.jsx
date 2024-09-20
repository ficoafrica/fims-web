import React from 'react'

const LoadSidebar = () => {
  return (
    <div role="status" className="w-4/6 mx-auto py-4 animate-pulse">
      <div className="h-10 bg-gray-200 rounded-full" id="img"></div>
      <div className="mt-8 py-4">
        <div className="h-10 mt-3 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        <div className="h-10 mt-3 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        <div className="h-10 mt-3 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        <div className="h-10 mt-3 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        <div className="h-10 mt-3 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
      </div>
      <div className="mt-20 py-4">
        <div className="h-10 mt-2 bg-gray-200 dark:bg-gray-700  rounded-full"></div>
        <div className="h-10 mt-2 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
      </div>
    </div>
  )
}

export default LoadSidebar