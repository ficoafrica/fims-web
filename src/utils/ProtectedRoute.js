import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from '../components/layout/Layout'

const ProtectedRoute = ({layout=false}) => {
  const {isLoggedIn} = useSelector((state) => state.auth)
  const access = localStorage.getItem('access')

  if (layout){
    return isLoggedIn || access ? <Layout><Outlet/></Layout> : <Navigate to="/auth/signin" />
  }

  return isLoggedIn || access ? <Outlet /> : <Navigate to="/auth/signin" />;
};

export default ProtectedRoute;