import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const [mail,setMail] = useState('')
    const [pass,setpass] = useState('')
    const navigate = useNavigate();
    const login=(()=>{
        createUserWithEmailAndPassword(auth, mail, pass)
        .then((user)=>{
            console.log(user)
            navigate(("/dashbord"))
        }).catch((err)=>{
            console.log(err)
        })
    console.log(auth);
    })
  return (
    <div>
      <h1>Log In</h1>
      <input type="text" placeholder='Enter Your Email' onChange={(e)=>setMail(e.target.value)} />
      <input type="text" placeholder='Password' onChange={(e)=>setpass(e.target.value)} />
      <button onClick={login}>Log In</button>
      <Link to="/">Sign Up</Link>
    </div>
  )
}
