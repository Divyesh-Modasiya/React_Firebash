import React, { useEffect, useState} from 'react'
import { auth, firestore } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Aos from 'aos';

export default function Dashbord() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true, 
    });
  }, []);
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
    <div className='w-full h-[100vh] flex justify-center items-center overflow-hidden'>
      <div  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="mainbox subbox w-[60%] h-[80vh] rounded-[10px] flex justify-center items-center">
      <h1 className='text-[35px] text-white font-bold'>Welcome {userdata.fname} to Dashbord!</h1>
      </div>
     
    </div>
  )
}
