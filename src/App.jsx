import React from 'react'
import './App.css'
import CBR from './components/CBR'
import A from './components/A';
// import B from './components/B';
const LazyAbout = React.lazy(()=>import('./components/B'))
import C from './components/C';
import { Routes,Route } from "react-router-dom";
import Nav from './components/Nav';
import User from './components/User';
import UserDetaile from './components/UserDetaile';
import Admin from './components/Admin';
import Profile from './components/Profile';
import { AuthProvider } from './components/Auth';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';

const App = () => {
  return (
    <AuthProvider>
    <div className='App'>
      <Nav/>
      <Routes>
        <Route path='/' element={<A/>}/>
        <Route path='/b' element={
          <React.Suspense fallback='Loading...' >
            <LazyAbout/>
          </React.Suspense>
        }>
          <Route index element={<C/>}/>
          <Route path='/b/c' element={<C/>}/>
          <Route path='/b/cbr' element={<CBR/>}/>
        </Route>
        <Route path='/user' element={<User/>}>
          <Route path='/user/admin' element={<Admin/>}/>
          <Route path='/user/:id' element={<UserDetaile/>}/>
        </Route>
        <Route path='profile' element={<RequireAuth><Profile/></RequireAuth>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
    </AuthProvider>
  )
}

export default App
