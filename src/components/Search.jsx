import React, { useContext, useState } from 'react'
import { collection, query, where, getDocs, setDoc, updateDoc, serverTimestamp, doc, getDoc} from 'firebase/firestore'
import { db } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Search = () => {
    const { currentUser } = useContext(AuthContext)
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

    const handleSelect = async () => {
        const combinedID = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid
        try {
            const res = await getDoc(doc(db, 'chats', combinedID))

            if(!res.exists()) {
                await setDoc(doc(db, 'chats', combinedID), {
                    messages: [],
                })

                await updateDoc(doc(db, 'userChats', currentUser.uid), {
                    [combinedID + '.userInfo']: {
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                        uid: user.uid,
                    },
                    [combinedID + '.date']: serverTimestamp(),
                })

                await updateDoc(doc(db, 'userChats', user.uid), {
                    [combinedID + '.userInfo']: {
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL,
                        uid: currentUser.uid,
                    },
                    [combinedID + '.date']: serverTimestamp(),
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleKey = (e) => {
        e.code === 'Enter' && handleSearch()
    }

        return (
        <div className='search'>
            <div className="searchForm">
                <input type="text" onKeyDown={handleKey} onChange = {(e) => setUserName(e.target.value)} placeholder='find a user' />
            </div>
            {user && <div className="userChat" onClick={handleSelect}>
                <img src={user.photoURL} alt="" />
                <div className="userChatInfo">
                    <span>{user.displayName}</span>
                </div>
            </div>}
        </div>
  )
}

export default Search