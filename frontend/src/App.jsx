import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import RegistrationPage from './pages/RegistrationPage'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
    <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<RegistrationPage></RegistrationPage>}></Route>
        <Route path='/register' element={<RegistrationPage></RegistrationPage>}></Route>
      </Routes>
    </>

  )
}
export default App
