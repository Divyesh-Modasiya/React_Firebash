import React, { useEffect, useState} from 'react'
import { auth, firestore } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function Dashbord() {
    const [user1,setUser1]=useState('')
     useEffect (()=>{
       let unsubscribe = onAuthStateChanged(auth,(user)=>{
        if(user){
            fetchuser(user)
            setUser1(user)
            
        }
       })
    },[user1])
    const [userdata,setUserdata]=useState('');

    const fetchuser = async (user) => {
        let data = await getDoc(doc(firestore,"users",user.uid));
        console.log(data.data());
        setUserdata(data.data());
        // signOut(auth)
        
    }
  return (
    <div>
      <h1>Welcome{userdata.fname}</h1>
    </div>
  )
}
