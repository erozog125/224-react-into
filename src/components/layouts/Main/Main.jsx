import React from 'react'
import './Main.css'

export const Main = ({children, styleMain}) => {
  return (
   <main className={styleMain}>
    {children}
   </main>
  )
}
