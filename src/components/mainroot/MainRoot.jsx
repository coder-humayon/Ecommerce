import React from 'react'
import Navbar from '../navbar/Navbar'
import Footers from '../Footers'
import { Outlet } from 'react-router'

const MainRoot = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footers/>
    </>
  )
}

export default MainRoot
