import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { AiFillDelete } from 'react-icons/ai'

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([])

  useEffect(() => {
    const loadSubscribers = async () => {
      const allSubscribers = await axios.get(`http://localhost:5001/subscriber/get-subscribers`)
      setSubscribers(allSubscribers.data.reverse())
    }

    loadSubscribers()
  }, [])

  const deleteSubscriber = async id => {
    const subscriberToDelete = await axios.get(`http://localhost:5001/subscriber/get-current-subscriber/${id}`)
    const email = subscriberToDelete.data.email
    toast.success(`${email} deleted successfully`)
    await axios.delete(`http://localhost:5001/subscriber/delete-subscriber/${id}`);
    const allSubscribers = subscribers.filter((subscriber) => { return subscriber._id !== id })
    setSubscribers(allSubscribers)
  }

  if (subscribers.length < 1) {
    return (<div className='offset-lg-2 container vh-100 d-flex align-items-center d-flex justify-content-center'>
      <div className='row'>
        <h1 className='text-center'>There are no subscribers</h1>
      </div>
    </div>)
  }
  return (
    <div className='offset-lg-2 container'>
      <ToastContainer />
      <div className='row d-flex justify-content-center py-4'>
        <h1 className='text-center py-2'>Subscribers - <span className='text-muted'>{subscribers.length}</span></h1>
        <div className='col-8'>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((subscriber, tabIndex) => {
                return <tr key={tabIndex}>
                  <td>{tabIndex + 1}</td>
                  <td>{subscriber.email}</td>
                  <td><span onClick={() => deleteSubscriber(subscriber._id)} className='text-danger'><AiFillDelete size={24} style={{ cursor: "pointer" }} /></span></td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Subscribers