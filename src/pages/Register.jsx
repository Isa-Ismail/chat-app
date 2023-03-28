import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
          <div className='formWrapper'>
              <p className="logo">Isa chat</p>
              <p className="title">Register</p>
              <form>
                  <input type="text" placeholder="display name"/>
                  <input type="email" placeholder="email"/>
                  <input type="password" placeholder="password"/>
                  <input style={{display: 'none'}} id="file" type="file" />
                  <label htmlFor="file">
                      <img src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/img.png" alt="" />
                      <span>Add and avatar</span>
                  </label>
                  <button type="submit">Register</button>
              </form>
              <p>
                  You do have an acount? <a href="/login">Login</a>
              </p>
          </div>
    </div>
  )
}

export default Register