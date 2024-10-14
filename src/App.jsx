
import React from 'react'
import 'react-toastify/dist/ReactToastify.css';

import { Outlet } from 'react-router-dom'

import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>

      <ToastContainer/>

      <Navbar />


      <Outlet />


    </>

  )
}

export default App