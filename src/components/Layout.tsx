import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Popular from './Popular'
import Category from './Category'

const Layout = () => {
  return (
    <>
    
    <Header />


    <Outlet />
   


    <Footer />
    
    
    </>
  )
}

export default Layout