import React from 'react'
import './Navbar.css'

export const Navbar = ({children}) => {
  return (
    <nav>
      <ul>
        {children}
      </ul>
    </nav>
  )
}
