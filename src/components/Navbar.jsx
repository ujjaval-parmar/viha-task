import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='bg-blue-400 py-6 px-4 text-white uppercase '>

      <div className='container mx-auto flex gap-10 '>


        <NavLink to='/'
          className={({ isActive, isPending }) =>
            isActive ? "text-blue-950 font-bold" : ""
          }>

          View Students

        </NavLink>


        <NavLink to='/student-registration'
          className={({ isActive, isPending }) =>
            isActive ? "text-blue-950 font-bold" : ""
          }>

          Add Student

        </NavLink>

      </div>

    </header>
  )
}

export default Navbar