import React, { useState } from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar'
import Watch from '../watch/Watch'
import './home.scss'

const Home = () => {
  const [user,setUser]=useState('man')
  return (
    <div className='home'>
      <Navbar />
      <Featured />
      <List />
      <List />   
      <List />
      <List />
      <Watch user={user} />
    </div>
  )
}

export default Home
