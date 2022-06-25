import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BiUser } from 'react-icons/bi'
import { MdSubscriptions } from 'react-icons/md'

const AdminNavbar = () => {
  return (

    <div className="offcanvas bg-dark text-white" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <Link to='/' className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Admin Panel</h5>
      </Link>
      <div className="offcanvas-body">
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink className="nav-link" to='/users'><span className='mx-2'><BiUser color='gray' /> </span> Users</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className="nav-link" to='/subscribers'><span className='mx-2'><MdSubscriptions color='gray' /></span> Subscribers</NavLink>
          </li>
        </ul>
        <hr></hr>
      </div>
    </div>

  )
}

export default AdminNavbar