import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../App.css";

const A = () => {
  const navigate = useNavigate()
  return (
    <div className='App'>
      <p>HOME</p>
      <button onClick={()=>navigate('/b')} >Place Order</button>
    </div>
  )
}

export default A
