import React, { useState } from 'react'
import { auth, firestore } from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore';

function Signup() {
    const [fname,setFname]=useState('');
    const [lname,setLname]=useState('');
    const [age,setAge]=useState('');
    const [sub,setSub]=useState('');
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const navigate = useNavigate();
    const signup =(()=>{
        createUserWithEmailAndPassword(auth,email,pass)
        .then((user)=>{
            console.log(user.user.uid);
            setDoc(doc(firestore,"users",user.user.uid),{
                fname,lname,age,sub,email
            })
        }).catch((err)=>{
            console.log(err)
        })
        navigate('deshbord');
    })
  return (
    <div>
        <h1>Signup</h1>
      <input type="text" placeholder='Enter Your First Name' onChange={(e)=> setFname(e.target.value)} />
      <input type="text" placeholder='Enter Your Last Name' onChange={(e)=> setLname(e.target.value)} />
      <input type="text" placeholder='Enter Your Age' onChange={(e)=> setAge(e.target.value)} />
      <input type="text" placeholder='Enter Your Subject' onChange={(e)=> setSub(e.target.value)} />
      <input type="text" placeholder='Enter Your Email' onChange={(e)=> setEmail(e.target.value)} />
      <input type="text" placeholder='Enter Your Password' onChange={(e)=> setPass(e.target.value)} />
      <button onClick={signup}>SignUp</button>
      <Link to="login">Log In</Link>
    </div>
  )
}

export default Signup
