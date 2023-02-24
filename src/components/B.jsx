import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import "../App.css";

const B = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className='App'>
      <p>ABOUT</p>
      <button onClick={()=>navigate(-1)} >Confirm Order</button>
      <div className='nestedButton'>
        <NavLink to='/b/c' >C</NavLink>
        <NavLink to='/b/cbr' >CBR</NavLink>
      </div>
    <Outlet/>
    </div>

    </>
  )
}

export default B
