import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Users from './pages/users'
import AddOrEditUser from './pages/users/add-edit-user'

function App() {
  return (
    <BrowserRouter>
      <div className='p-4'>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='user/:id' element={<AddOrEditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App
