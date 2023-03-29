import React from 'react'
import img from '../img/gorl.jpg'

const Navbar = () => {
  return (
      <div className='navbar'>
          <span className="logo">Ismail chat</span>
          <div className="user">
              <img src={img} alt="" />
              <span>John</span>
              <button>Logout</button>
          </div>
    </div>
  )
}

export default Navbar