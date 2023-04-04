import React, { useContext } from 'react'
import Input from './Input'
import Messages from './Messages'
import { ChatContext } from '../context/ChatContext'
import { AuthContext } from '../context/AuthContext'

const Chat = () => {

  const { currentUser } = useContext(AuthContext)

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{currentUser.displayName}</span>
        <div className="chatIcons">
          <img src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/cam.png" alt="" />
          <img src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/add.png" alt="" />
          <img src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/more.png" alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat