import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <section className='flex flex-row'>
      <aside className='h-screen overflow-y-auto w-1/4 bg-[#43A047]/[.10]'>
        <Sidebar/>
      </aside>
      <div className='w-3/4'>
        <Header/>
        <main>
          {children}
        </main>
      </div>
    </section>
  )
}

export default Layout