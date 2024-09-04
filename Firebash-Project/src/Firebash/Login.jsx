import React, { useState } from 'react'
import { auth } from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function Login() {
    const [email,setEmail]=useState('') 
    const [pass,setPass]=useState('') 
    const navigate = useNavigate()
    const login =(()=>{
        createUserWithEmailAndPassword(auth,email,pass)
        .then((user)=>{
            console.log(user)
        }).catch((err)=>{
            console.log(err)
        })
        navigate('deshbord');
    })
  return (
    <div>
        <h1>Login</h1>
      <input type="text" placeholder='Enter Your Email' onChange={(e)=> setEmail(e.target.value)} />
      <input type="text" placeholder='Enter Your Password' onChange={(e)=> setPass(e.target.value)} />
      <button onClick={login}>Login</button>
      <Link to="/">Sign Up</Link>
    </div>
  )
}
