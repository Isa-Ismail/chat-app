import React, { useContext, useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase'
import { ChatContext } from '../context/ChatContext'

const Chats = () => {
    const [chats, setChats] = useState([])

    const { currentUser } = useContext(AuthContext)
    const { data, dispatch } = useContext(ChatContext)

    const handleSelect = (e) => {
        dispatch({
            type: 'CHANGE_USER',
            payload: e
        })
    }
    
    console.log(data)

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, 'userChats', currentUser?.uid), (doc) => {
                setChats(doc.data())
            })
        return () => {
            unsub()
            }
            
        }

        currentUser?.uid && getChats()

    }, [currentUser?.uid])
        
    console.log(Object.entries(chats))
  return (
      <div className='chats'>
          <p style={{ color: 'grey', textAlign: 'center' , marginTop: '40px', width: '100%'}}>People in the room</p>
          {chats&&Object.entries(chats)?.map(([key, value]) => (
              <div key={ key } className="userChat" onClick={() => handleSelect(value?.userInfo)}>
                  <img src={value?.userInfo?.photoURL} alt="" />
                  <div className="userChatInfo">
                      <span>{value.userInfo?.displayName}</span>
                      <p>{ value.lastMessage?.text }</p>
                  </div>
              </div>
          ))   
          }
      </div>
  )
}

export default Chats