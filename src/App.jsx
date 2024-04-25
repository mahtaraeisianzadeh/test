import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './homepage/Homepage'
import { Routes, Route } from 'react-router';
import Menu  from './pages/Menu/Menu'
import Sup from './pages/Suport/Sup'
import Account from './pages/My account/Account'
import Options from './components/HP/Options'

function App() {

  return (
    <>
   <Routes>
<Route path="/">
  <Route index element={<Homepage/>}/>
  <Route path="Menu" element={<Menu/>}/>
  <Route path="Account" element={<Account/>}/>
  <Route path="Sup" element={<Sup/>}/>

    </Route>
  </Routes>


    </>
  )
}

export default App
