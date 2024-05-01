import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddOrEditUser = () => {
  const navigate = useNavigate()
  const addOrEdit = window.location.pathname.split('/').pop()
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [gender, setGender] = useState('')

  const showUserByID = async () => {
    const userResponse = await axios.get(
      `http://localhost:3001/user/${addOrEdit}`,
    )
    setId(userResponse?.data[0]?._id)
    setName(userResponse?.data[0]?.fullName)
    setEmail(userResponse?.data[0]?.email)
    setPhoneNumber(userResponse?.data[0]?.phoneNumber)
    setGender(userResponse?.data[0]?.gender)
  }

  const onAddOrEditUser = async () => {
    if (addOrEdit === 'add') {
      const payload = {
        fullName: name,
        email: email,
        phoneNumber: phoneNumber,
        gender: gender,
      }
      await axios.post('http://localhost:3001/user', payload)
      navigate('/')
    } else {
      const payload = {
        fullName: name,
        email: email,
        phoneNumber: phoneNumber,
        gender: gender,
      }
      await axios.put(`http://localhost:3001/user/${id}`, payload)
      navigate('/')
    }
  }

  useEffect(() => {
    if (addOrEdit !== 'add') {
      showUserByID(addOrEdit)
    }
  }, [])

  return (
    <div className='p-10'>
      <h1 className='mb-8 font-extrabold text-4xl'>
        {addOrEdit === 'add' ? 'Tambah User' : 'Edit User'}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='mt-4'>
          <label className='block font-semibold'>Nama Lengkap</label>
          <input
            className='shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='mt-4'>
          <label className='block font-semibold'>Email</label>
          <input
            className='shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mt-4'>
          <label className='block font-semibold'>Nomor Telepon</label>
          <input
            className='shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full'
            type='text'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div className='mt-4'>
          <label className='block font-semibold'>Jenis Kelamin</label>
          <input
            className='shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full'
            type='text'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-between mt-8'>
          <button
            onClick={() => onAddOrEditUser()}
            className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'>
            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 ■bg-white dark: bg-gray-900 rounded-md group-hover:bg-opacity=0'>
              {' '}
              {addOrEdit === 'add' ? 'Tambah User' : 'Edit User'}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddOrEditUser
