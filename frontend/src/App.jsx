import React, { useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Login from './containers/Login/Login'
import Register from './containers/Register/Register'
import Posts from './containers/Posts/Posts'
import Profile from './containers/Profile/Profile'
import { Route, Routes } from 'react-router'
import { useDispatch } from 'react-redux'
import { getProfile } from './services/actions/user.action'
import { getPost } from './services/actions/post.action'


const App = () => {
const token = JSON.parse(localStorage.getItem("token"));
const dispatch = useDispatch()
  if(token != null){
      dispatch(getProfile(token));
  }

  useEffect(() =>{
    dispatch(getPost())
  },[])
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