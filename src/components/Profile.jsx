import React from 'react'
import { useAuth } from './Auth'
import '../App.css'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    console.log(`user name ${auth.user}`)

    const handleLogOut=()=>{
        auth.logout()
        navigate('/')
    }

  return (
    <div>
      <h3>profile page {auth.user}</h3>
      <button onClick={handleLogOut} >LogOut</button>
    </div>
  )
}

export default Profile
