import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, firestore } from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore/lite'

export default function Signup() {
    const [fname,setFname] = useState('')
    const [lname,setLname] = useState('')
    const [age,setAge] = useState('')
    const [sub,setSub] = useState('')
    const [mail,setMail] = useState('')
    const [pass,setpass] = useState('')
    const navigate = useNavigate();
    const signup=(()=>{
        createUserWithEmailAndPassword(auth, mail, pass)
        .then((user)=>{
            console.log(user.user.uid)
            setDoc(doc(firestore, "users", user.user.uid),{
              fname,lname,age,sub,mail
            })
            navigate(("/dashbord"))
        }).catch((err)=>{
            console.log(err)
        })
    console.log(auth);
    })
  return (
    <div className='bg-black w-full h-[100vh] flex justify-center items-center'>
      <div className='mainbox flex flex-col border border-[#ffffff57] justify-center items-center h-[450px] rounded-[10px]'>
      <h1 className=' text-white text-[35px] font-bold  '>Sign <span className='text-[#1c51ff]'>Up</span> </h1>
      <div className=' w-[400px] flex flex-col items-center mt-[50px]'>
      <input className='bg-transparent text-white outline-none border w-[300px] h-[40px] ps-[10px] rounded-[5px] my-[10px]' type="text" placeholder='Enter Your First Name' onChange={(e)=>setFname(e.target.value)} />
      <input className='bg-transparent text-white outline-none border w-[300px] h-[40px] ps-[10px] rounded-[5px] my-[10px]' type="text" placeholder='Enter Your Last Name' onChange={(e)=>setLname(e.target.value)} />
      <input className='bg-transparent text-white outline-none border w-[300px] h-[40px] ps-[10px] rounded-[5px] my-[10px]' type="text" placeholder='Enter Your Age' onChange={(e)=>setAge(e.target.value)} />
      <input className='bg-transparent text-white outline-none border w-[300px] h-[40px] ps-[10px] rounded-[5px] my-[10px]' type="text" placeholder='Enter Your Subject' onChange={(e)=>setSub(e.target.value)} />
      <input className='bg-transparent text-white outline-none border w-[300px] h-[40px] ps-[10px] rounded-[5px] my-[10px]' type="text" placeholder='Enter Your Email' onChange={(e)=>setMail(e.target.value)} />
      <input className='bg-transparent text-white outline-none border w-[300px] h-[40px] ps-[10px] rounded-[5px] my-[10px]' type="text" placeholder='Password' onChange={(e)=>setpass(e.target.value)} />
      <button className='border w-[150px] h-[40px] text-white my-[10px] rounded-[5px] font-semibold' onClick={signup}>Sign Up</button>
      <Link className='underline text-[#1c51ff] font-semibold' to="login">Log In</Link>
      </div>
      </div>
   
     
    </div>
  )
}
