import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Login from './containers/Login/Login'
import Register from './containers/Register/Register'
import Posts from './containers/Posts/Posts'
import Profile from './containers/Profile/Profile'
import { Route, Routes } from 'react-router'


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Profile/>} path='/profile' />
        <Route element={<Login />} path='/login' />
        <Route element={<Register/>} path='/register' />
        <Route element={<Posts/>} path='/' />
      </Routes>      
    </>
  )
}

export default App