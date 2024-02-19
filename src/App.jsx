import { useRoutes } from 'react-router-dom'
import { Home } from './components/Pages/Home/Home'
import { Services } from './components/Pages/Services/Services'
import { References } from './components/Pages/References/References'
import { NotFound } from './components/NotFound/NotFound'
import { Header } from './components/Layouts/Header/Header'
import { Logo } from './components/Logo/Logo'
import { Navbar } from './components/Navbar/Navbar'
import { Item } from './components/Item/Item'

const AppRoutes = () => {
  let routes = useRoutes ([
    { path:'/', element: <Home /> },
    { path:'/services', element: <Services /> },
    { path:'/references', element: <References /> },
    { path:'*', element: <NotFound /> },
  ])
  return routes
}

function App() {

  return (
    <>
     <Header>
      <Logo />
      <Navbar>
          <Item content = 'Inicio' route='/' />
          <Item content = 'Acerca de mi' />
          <Item content = 'Proyectos' />          
          <Item content = 'Servicios' route='/services' />          
          <Item content = 'Referencias' route='/references' />          
      </Navbar>
    </Header>
     <AppRoutes />
    </>
  )
}

export default App
