import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Home from '../pages/Home'
import Navbar from '../sections/Navbar'

function MainLayout({children}) {
  return (
    <>
    <Navbar/>
    <BreadCrumb/>
    {children}
    </>
  )
}

export default MainLayout