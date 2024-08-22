import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = () => {
  const {isLoggedIn} = useSelector((state) => state.auth)
  const access = localStorage.getItem('access')

  return !isLoggedIn || !access ? <Outlet /> : <Navigate to="/auth/workspace" />;
}

export default PublicRoute