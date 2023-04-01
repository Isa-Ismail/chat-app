import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
const Register = () => {
  const [error, setError] = useState (false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e.target[3])
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const avatar = e.target[3].files[0]
    try {
          const res = await createUserWithEmailAndPassword(auth, email, password)
          
          const storageRef = ref(storage, displayName);

          const uploadTask = uploadBytesResumable(storageRef, avatar);

          uploadTask.on(
            (error) => {
              setError(true)
            }, 
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                await updateProfile(res.user, {
                  displayName,
                  photoURL: downloadURL
                }
                )
                await setDoc(doc(db, 'users', res.user.uid), {
                  uid: res.user.uid,
                  displayName,
                  email,
                  photoURL: downloadURL
                })
                    });
            }
          );
      
          } catch (error) {
            setError(true)
          }
  }

  return (
    <div className='formContainer'>
          <div className='formWrapper'>
              <p className="logo">Isa chat</p>
              <p className="title">Register</p>
              <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="display name"/>
                  <input type="email" placeholder="email"/>
                  <input type="password" placeholder="password"/>
                  <input style={{display: 'none'}} id="file" type="file" />
                  <label htmlFor="file">
                      <img src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/img.png" alt="" />
                      <span>Add and avatar</span>
                  </label>
                  <button type="submit">Register</button>
                  {error && <p style={{color: 'red', fontWeight: 'bold', textAlign: 'center'}}>Something went wrong</p>}
              </form>
              <p>
                  You do have an acount? <a href="/login">Login</a>
              </p>
          </div>
    </div>
  )
}

export default Register