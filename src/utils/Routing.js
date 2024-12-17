import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

// Pages
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import VerifyEmail from '../pages/auth/VerifyEmail';
import Workspace from '../pages/auth/Workspace';
import Dashboard from '../pages/home/Dashboard';
import UserMgt from '../pages/user/UserMgt';
import SupplyMgt from '../pages/supply/SupplyMgt';
import Livestock from '../pages/livestock/Livestock';
import CropMgt from '../pages/crop/CropMgt';
import Report from '../pages/report/Report';
import Climate from '../pages/climate/Climate';

import { AuthProvider } from '../context/AuthContext'


const Routing = () => {

  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route element={<ProtectedRoute/>}>
          <Route path='/auth/workspace' element={<Workspace/>}/>
          <Route exact path='/' element={<Navigate to="/auth/workspace"/>} />
        </Route>

        <Route element={<ProtectedRoute layout={true} />}>
          <Route path='/dashboard/:id' element={<Dashboard/>}/>
          <Route path='/user-management/:id' element={<UserMgt/>}/>
          <Route path='/supply-management/:id' element={<SupplyMgt/>}/>
          <Route path='/livestock-inventory/:id' element={<Livestock/>}/>
          <Route path='/crop-management/:id' element={<CropMgt/>}/>
          <Route path='/report-analytics/:id' element={<Report/>}/>
          <Route path='/climate-guage/:id' element={<Climate/>}/>
        </Route>

        {/* Auth Routes */}
        <Route element={<PublicRoute/>}>
          <Route path='/auth/signin' element={<SignIn/>}/>
          <Route path='/auth/signup' element={<SignUp/>}/>
          <Route path='/auth/verify-email' element={<VerifyEmail/>}/>
        </Route>
        {/* Auth Routes */}
      </Routes>
      </AuthProvider>
    </Router>
  )
}

export default Routing