import React from 'react'
import img from '../img/gorl.jpg'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Navbar = () => {
  return (
      <div className='navbar'>
          <span className="logo">Ismail's chat room</span>
          <div className="user">
              <img src={img} alt="" />
              <span>John</span>
              <button onClick={() => signOut(auth) }>Logout</button>
          </div>
    </div>
  )
}

export default Navbar