import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
const Login = () => {
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    try {
      const res = await signInWithEmailAndPassword(auth, e.target[0].value, e.target[1].value);
      navigate('/')
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }
  return (
    <div className='formContainer'>
          <div className='formWrapper'>
              <p className="logo">Isa chat</p>
              <p className="title">Register</p>
              <form onSubmit={handleSubmit}>
                  <input type="email" placeholder="email"/>
                  <input type="password" placeholder="password"/>
                  <button type="submit">Login</button>
              </form>
              {error && <p style={{color: 'red', fontWeight: 'bold', textAlign: 'center'}}>Something went wrong</p>}
              <p>
                  You don't have an acount? <Link to='/register'>Register</Link>
              </p>
          </div>
    </div>
  )
}

export default Login