import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, firestore } from '../../firebaseConfig';


export default function Dashbord() {
  useEffect(()=>{
    fetchuser()
  },[])
    const [user1,setUser1]= useState("");

    const fetchuser = async () => {
      let user = auth.currentUser;
      let data = await getDoc(doc(firestore,"users",user.uid))
      console.log(data.data());
      setUser1(data.data())
    }

  return (
    <div>
      <h1>Welcome {user1.fname} on Dashbord Page</h1>
    </div>
  )
}
