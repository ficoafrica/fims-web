import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

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

const Routing = () => {
  return (
    <Router>
      <Routes>
      
        {/* Dashboard Routes */}
        <Route exact path='/' element={<Dashboard/>} />
        {/* Dashboard Routes */}

        <Route path='/user-management' element={<UserMgt/>}/>
        
        <Route path='/supply-management' element={<SupplyMgt/>}/>
        <Route path='/livestock-inventory' element={<Livestock/>}/>
        <Route path='/crop-management' element={<CropMgt/>}/>
        <Route path='/report' element={<Report/>}/>
        <Route path='/climate-guage' element={<Climate/>}/>

        {/* Auth Routes */}
        <Route path='/auth/signin' element={<SignIn/>}/>
        <Route path='/auth/signup' element={<SignUp/>}/>
        <Route path='/auth/verify-email' element={<VerifyEmail/>}/>
        <Route path='/auth/workspace' element={<Workspace/>}/>
        {/* Auth Routes */}
      </Routes>
    </Router>
  )
}

export default Routing