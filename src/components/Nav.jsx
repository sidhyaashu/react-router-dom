import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
import { useAuth } from './Auth'

const navStyle =({isActive})=>{
    return {
        fontWeight:isActive?'bold':'normal',
        color:isActive?'red':'white',
        textDecoration:isActive?'underline':'none'
    }
}

const Nav = () => {
  const auth = useAuth()


  return (
    <nav>
      <NavLink className='nava' style={navStyle} to='/' >HOME</NavLink>
      <NavLink className='nava' style={navStyle} to='/b' >ABOUT</NavLink>
      <NavLink className='nava' style={navStyle} to='/profile' >PROFILE</NavLink>
      {!auth.user && (
        <NavLink className='nava' style={navStyle} to='/login' >LOGIN</NavLink>
      )}
    </nav>
  )
}

export default Nav
