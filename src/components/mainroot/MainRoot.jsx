import React from 'react'
import Navbar from '../navbar/Navbar'
import Footers from '../Footers'
import Navbar2 from '../Navbar2/Navbar2'
import { Outlet } from 'react-router-dom'


const MainRoot = () => {
  return (
    <>
        <Navbar/>
        <Navbar2/>
        <Outlet/>
        <Footers/>
    </>
  )
}

export default MainRoot
