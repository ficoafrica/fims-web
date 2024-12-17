import React, {useEffect} from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { useAuthContext } from '../../context/AuthContext'
import { useParams } from 'react-router-dom';
import LoadSidebar from '../loaders/LoadSidebar';
import { useSelector } from 'react-redux';
import LoadHeader from '../loaders/LoadHeader';


const Layout = ({ children }) => {
  let {loadLayout, viewFarm} = useAuthContext();
  let {id} = useParams();
  let {firstVisit, load} = useSelector((state)=> state.auth)

  useEffect(()=>{
    if (firstVisit){
      viewFarm(id, false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className='flex flex-row'>
      <aside className='h-screen overflow-y-auto w-1/4 bg-[#43A047]/[.10]'>
        {loadLayout || load ? (<LoadSidebar/>) : (<Sidebar/>)}
      </aside>
      <div className='w-3/4'>
        {loadLayout || load ? (<LoadHeader/>) : (<Header/>)}
        <main>
          {loadLayout || load ? null : children}
        </main>
      </div>
    </section>
  )
}

export default Layout