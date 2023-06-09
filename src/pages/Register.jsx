import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate()
  const [error, setError] = useState(false)
  
  const handleSubmit = async (e) => {

    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);
      await uploadBytesResumable(storageRef, file);
      const url = await getDownloadURL(storageRef);

      await updateProfile(res.user, {
        displayName,
        photoURL: url
      })

      await setDoc(doc(db, 'users', res.user.uid), {
        displayName,
        photoURL: url,
        email,
        uid: res.user.uid
      })

      await setDoc(doc(db, 'userChats', res.user.uid), {})
      navigate('/')
      
    } catch (error) {
      console.log(error)
      setError(true)

      setTimeout(() => {
        setError(false)
      }, 1000);
    }
  }

  return (
    <div className='formContainer'>
          <div className='formWrapper'>
              <p className="logo">Ismail's chat room</p>
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
                  You do have an acount? <Link to='/login'>Login</Link>
              </p>
          </div>
    </div>
  )
}

export default Register