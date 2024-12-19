import React from 'react'
import NavbarComponent from './NavbarComponent'
import { Outlet } from 'react-router-dom'
import FooterComponent from './FooterComponent'

export default function () {
  return (
    <>
         <header>
            <NavbarComponent/>
         </header>
            <Outlet/>
            <FooterComponent/>
    </>
  )
}
