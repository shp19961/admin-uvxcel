import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { AiFillDelete } from 'react-icons/ai'

const Users = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const loadUsers = async () => {
      const allUsers = await axios.get(`http://localhost:5001/get-users`)
      setUsers(allUsers.data.reverse())
    }

    loadUsers()
  }, [])

  const deleteUser = async id => {
    const userToDelete = await axios.get(`http://localhost:5001/get-current-user/${id}`)
    const name = userToDelete.data.name
    toast.success(`User ${name.toUpperCase()} deleted successfully`)
    await axios.delete(`http://localhost:5001/delete-user/${id}`);
    const allUsers = users.filter((user) => { return user._id !== id })
    setUsers(allUsers)
  }

  if (users.length < 1) {
    return (<div className='offset-lg-2 container vh-100 d-flex align-items-center d-flex justify-content-center'>
      <div className='row'>
        <h1 className='text-center'>There are no users</h1>
      </div>
    </div>)
  }
  return (
    <div className='offset-lg-2 container'>
      <ToastContainer />
      <div className='row d-flex justify-content-center py-4'>
        <h1 className='text-center py-2'>Users - <span className='text-muted'>{users.length}</span></h1>
        <div className='col-lg-11'>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Subject</th>
                <th scope="col">Enquiry</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, Index) => {
                return <tr key={Index}>
                  <td>{Index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>{user.subject}</td>
                  <td>{user.helptext}</td>
                  <td><span onClick={() => deleteUser(user._id)} className='text-danger'><AiFillDelete size={24} style={{ cursor: "pointer" }} /></span></td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Users