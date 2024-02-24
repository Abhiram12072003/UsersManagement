import React from 'react'
import Navigationbar from './Components/navigationbar/NavigationBar';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div>
      {/* Navigation bar */}
      <Navigationbar />
      {/* Placeholder */}
      <Outlet />
    </div>
  )
}

export default RootLayout