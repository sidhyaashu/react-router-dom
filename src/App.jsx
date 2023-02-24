import './App.css'
import CBR from './components/CBR'
import A from './components/A';
import B from './components/B';
import C from './components/C';
import { Routes,Route } from "react-router-dom";


import React from 'react'
import Nav from './components/Nav';

const App = () => {
  return (
    <div className='App'>
      <Nav/>
      <Routes>
        <Route path='/' element={<A/>}/>
        <Route path='/b' element={<B/>}>
          <Route index element={<C/>}/>
          <Route path='/b/c' element={<C/>}/>
          <Route path='/b/cbr' element={<CBR/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
