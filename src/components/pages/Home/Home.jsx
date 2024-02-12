import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { Logo } from '../../Logo/Logo'
import { Navbar } from '../../Navbar/Navbar'
import { Item } from '../../Item/Item'

export const Home = () => {
  return (
    <Header>
      <Logo />
      <Navbar>
          <Item content = 'Inicio' />
          <Item content = 'Acerca de mi' />
          <Item content = 'Proyectos' />          
      </Navbar>
    </Header>
  )
}
