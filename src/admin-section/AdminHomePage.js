import React from 'react'
import { GiFlowerPot, GiSunflower } from 'react-icons/gi'

const AdminHomePage = () => {
  return (
    <div className='container vh-100 d-flex align-items-center d-flex justify-content-center'>
      <div className='row '>
        <span className='text-center'><GiFlowerPot size={84} /></span>
        <h1 className='text-center'>Welcome Admin</h1>
        <h2 className='text-center text-muted'>Manage users and subscribers</h2>
      </div>
    </div>
  )
}

export default AdminHomePage