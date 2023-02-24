import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const navStyle =({isActive})=>{
    return {
        fontWeight:isActive?'bold':'normal',
        color:isActive?'red':'white',
        textDecoration:isActive?'underline':'none'
    }
}

const Nav = () => {
  return (
    <nav>
      <NavLink className='nava' style={navStyle} to='/' >HOME</NavLink>
      <NavLink className='nava' style={navStyle} to='/b' >ABOUT</NavLink>
    </nav>
  )
}

export default Nav
