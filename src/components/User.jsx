import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

const User = () => {
    const [searchParams,setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter')==='active'
  return (
    <div>
      <h1>User 1</h1>
      <h1>User 2</h1>
      <h1>User 3</h1>
      <Outlet/>
      <div>
        <button onClick={()=>setSearchParams({filter:'active'})} >Active User</button>
        <button onClick={()=>setSearchParams({})} >Reset Filter</button>
      </div>
      {
        showActiveUsers?<h2>Showing active User</h2>: <h2>Showing All User</h2>
      }
    </div>
  )
}

export default User
