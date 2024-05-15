import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <>
    <div className='container'>
        <h1><u>Log in</u></h1>
        <input type="text" placeholder='Enter your roll no' className='log-inp both'/> <br />
        <input type="password" placeholder='Enter your Password' className='log-inp both' /> <br />
        <button type="submit" className='both log-submit'>Login</button>
    </div>
    </>
  )
}

export default Login