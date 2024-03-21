import React from 'react'
import Posts from '../Posts/Posts'
import User from '../../components/User/User'
import PostAdd from '../../components/PostAdd/PostAdd'
import ProfilePosts from '../ProfilePosts/ProfilePosts'


function Profile() {
  return (
    <>
    <PostAdd/>
    <User/>
    <ProfilePosts/>
    </>
  )
}

export default Profile