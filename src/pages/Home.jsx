import React, { useContext } from 'react'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router'

const Home = () => {
  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate()
  !currentUser && navigate('/login')
  return (
      <div className="home">
          <div className="container">
            <Sidebar />
            <Chat />
          </div>
      </div>      
  )
}

export default Home