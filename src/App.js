import React from 'react';
import Navbar from './Navbar'
import Header from './Header'
import Produtos from './Produtos';

const routesMap = {
  '/': 'Home',
  '/produtos': 'Produtos'
}

const App = () => {
  const {pathname} = window.location
  
  return (<>
    <Navbar routesMap={routesMap}/>
    <Header route={routesMap[pathname]}/>
    { 
       pathname === '/produtos' 
        ? <Produtos/>
        : <p>Essa é a home do site</p>
    }
  </>)
}

export default App