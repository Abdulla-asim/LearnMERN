import { useState } from 'react'

const LoginButton = () => {
  const [ loggedIn, setLogged ] = useState("Login");

  const toggleLogin = () => {
    (loggedIn == 'Login')? setLogged('Logged') : setLogged('Login');
  }

  return (
    <div className='loginButton'>
      <button onClick={() => toggleLogin()}>
        {loggedIn}
      </button>
    </div>
  )
}

export default LoginButton