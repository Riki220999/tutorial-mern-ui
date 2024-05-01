import UserList from './user-list'
import { useNavigate } from 'react-router-dom'

const Users = () => {
  const navigate = useNavigate()

  const directUser = () => {
    return navigate('/user/add')
  }

  return (
    <>
      <h1 className='text-3xl font-bold text-gray-800 mb-4'>
        {' '}
        Welcome Teman-teman Binus,
      </h1>
      <p className='text-gray-600 mb-6'>
        (MERN - Mongo, Express, ReactJS, NodeJS)
      </p>
      <button
        onClick={directUser}
        className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'>
        <span className='relative px-5 py-2.5 transition-all ease-in duration-75 ■bg-white dark: bg-gray-900 rounded-md group-hover:bg-opacity=0'>
          {' '}
          Tambah User
        </span>
      </button>
      <UserList />
    </>
  )
}
export default Users
