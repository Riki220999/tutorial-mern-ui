import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserList = () => {
  const [users, setUsers] = useState([])

  const showUsers = async () => {
    const usersResponse = await axios.get('http://localhost:3001/users')
    setUsers(usersResponse?.data)
  }

  const onRemoveUser = async (id) => {
    await axios.delete(`http://localhost:3001/user/${id}`)
    showUsers()
  }

  useEffect(() => {
    showUsers()
  }, [])

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Nama
            </th>
            <th scope='col' className='px-6 py-3'>
              Email
            </th>
            <th scope='col' className='px-6 py-3'>
              Nomor Telepon
            </th>
            <th scope='col' className='px-6 py-3'>
              Jenis Kelamin
            </th>
            <th scope='col' className='px-6 py-3'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users?.map((val) => {
              return (
                <tr
                  className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                  key={val?._id}>
                  <th
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                    scope='row'>
                    {val?.fullName}
                  </th>
                  <td className='px-6 py-4'>{val?.email}</td>
                  <td className='px-6 py-4'>{val?.phoneNumber}</td>
                  <td className='px-6 py-4'>{val?.gender}</td>
                  <td className='px-6 py-4'>
                    <Link
                      to={`user/${val?._id}`}
                      className='button is-info is-small mr-1'>
                      Edit
                    </Link>{' '}
                    ||{' '}
                    <button onClick={() => onRemoveUser(val?._id)}>
                      Hapus
                    </button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default UserList
