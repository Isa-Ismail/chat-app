import React from 'react'
import img from '../img/gorl.jpg'

const Chats = () => {
  return (
      <div className='chats'>
          <div className="userChat">
              <img src={img} alt="" />
              <div className="userChatInfo">
                  <span>Jane</span>
                  <p>Hello</p>
              </div>
          </div>
          <div className="userChat">
              <img src={img} alt="" />
              <div className="userChatInfo">
                  <span>Jane</span>
                  <p>Hello</p>
              </div>
          </div>
          <div className="userChat">
              <img src={img} alt="" />
              <div className="userChatInfo">
                  <span>Jane</span>
                  <p>Hello</p>
              </div>
          </div>
      </div>
  )
}

export default Chats