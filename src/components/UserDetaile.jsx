import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetaile = () => {
    const {id} =useParams()
    
  return (
    <div>
      User Details {id}
    </div>
  )
}

export default UserDetaile
