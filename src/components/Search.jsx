import React, { useState } from 'react'
import img from '../img/gorl.jpg'
import { collection, query, where, getDocs} from 'firebase/firestore'
import { db } from '../firebase'

const Search = () => {
    const [userName, setUserName] = useState("")
    const [user, setUser] = useState(null)
    const [error, setError] = useState(false)

    const handleSearch = async () => {
        const q = query (collection(db, 'users'), where('displayName', '==', userName))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            setUser(doc.data())
        })
    }

    const handleKey = (e) => {
        e.code === 'Enter' && handleSearch()
    }

        return (
        <div className='search'>
            <div className="searchForm">
                <input type="text" onKeyDown={handleKey} onChange = {(e) => setUserName(e.target.value)} placeholder='find a user' />
            </div>
            {user && <div className="userChat">
                <img src={user.photoURL} alt="" />
                <div className="userChatInfo">
                    <span>{user.displayName}</span>
                </div>
            </div>}
        </div>
  )
}

export default Search