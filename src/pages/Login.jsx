import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='formContainer'>
          <div className='formWrapper'>
              <p className="logo">Isa chat</p>
              <p className="title">Register</p>
              <form>
                  <input type="email" placeholder="email"/>
                  <input type="password" placeholder="password"/>
                  <button type="submit">Login</button>
              </form>
              <p>
                  You don't have an acount? <Link to='/register'>Register</Link>
              </p>
          </div>
    </div>
  )
}

export default Login