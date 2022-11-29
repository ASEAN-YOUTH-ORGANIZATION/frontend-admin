import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Sidebar from './components/Sidebar'
import ManageVolunteer from './pages/ManageVolunteer'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import ManageUser from './pages/ManageUser'
import ManageList from './pages/ManageList'
import Dashboard from './pages/Dashboard'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <Login/> */}
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/user' element={<ManageUser/>}/>
      <Route path='/list-relawan' element={<ManageList/>}/>
      <Route path='/relawan' element={<ManageVolunteer/>}/>
    </Routes>
    </>
  )
}

export default App
