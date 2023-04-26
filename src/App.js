import React from 'react';
import Navbar from './Navbar'
import Header from './Header'
import Produtos from './Produtos'
import Home from './Home'

const routesMap = {
  '/': 'Home',
  '/produtos': 'Produtos'
}

const App = () => {
  const {pathname} = window.location
  const Pagina = pathname === '/produtos' 
    ? Produtos
    : Home

  return (<>
    <Navbar routesMap={routesMap}/>
    <Header route={routesMap[pathname]}/>
    <Pagina/>
  </>)
}

export default App