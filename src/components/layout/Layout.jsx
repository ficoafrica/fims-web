import React, {useEffect} from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { useAuthContext } from '../../context/AuthContext'
import { useParams } from 'react-router-dom';
import LoadWorkspace from '../loaders/LoadWorkspace';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  let {loadLayout, viewFarm} = useAuthContext();
  let {id} = useParams();
  let {firstVisit} = useSelector((state)=> state.auth)

  useEffect(()=>{
    if (firstVisit){
      viewFarm(id, false)
    }
  }, [])

  return (
    <section className='flex flex-row'>
      <aside className='h-screen overflow-y-auto w-1/4 bg-[#43A047]/[.10]'>
        {loadLayout ? (<LoadWorkspace/>) : (<Sidebar/>)}
      </aside>
      <div className='w-3/4'>
        {loadLayout ? (<LoadWorkspace/>) : (<Header/>)}
        <main>
          {loadLayout ? null : children}
        </main>
      </div>
    </section>
  )
}

export default Layout