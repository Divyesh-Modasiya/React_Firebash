import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, provider } from "../firebaseConfig";
import ImageSlider from "./ImageSlider";
import Aos from "aos";
export default function Login() {
  const [user, SetUser] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  useEffect(() => {
    let sub = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        SetUser(currentUser);
      }
    });
  }, []);

  const handelLogin = async () => {
    let user = await signInWithPopup(auth, provider);
    console.log(user);
    SetUser(user.user);
  };

  const handelSignout = async () => {
    await signOut(auth);
    SetUser(null);
  };
  return (
    <div>
      {user ? (
        <div className="mainCard w-full h-[100vh] flex justify-center items-center">
            <div data-aos="fade-up" className="card w-[60%] h-[70vh] rounded-[10px] flex flex-col justify-evenly items-center shadow-2xl">
              <div className="imgbox flex justify-center items-center">
          <img src={user.photoURL} alt="" className="w-[100px] rounded-[50%]"/>

              </div>
          <h1 className="text-[50px] text-center">Welcome {user.displayName}</h1>
          <h1 className="text-center text-[20px]">Name : {user.displayName}</h1>
          <h1 className="text-center text-[20px]">Email address : {user.email}</h1>
          <div className="btnbox w-full flex justify-center">
          <button className="w-[150px] h-[40px] text-white text-[15px] font-semibold rounded-[8px] bg-[rgb(54,54,54)]" onClick={handelSignout}>Sign Out</button>
          </div>
        </div>
        </div>
        
      ) : (
        <div className="main w-full h-[100vh] flex justify-center items-center">
        <div className="mainBox shadow-2xl  border-[#00000048] rounded-[10px] w-[60%] h-[75vh] flex justify-center items-center overflow-hidden" >
        <div className="sub2 w-[50%] h-[75vh]" data-aos="fade-right">
          <ImageSlider/>
          </div>

          <div className="sub1 w-[50%] h-[75vh] border-[#00000048] border-r-0  px-[40px] flex justify-evenly flex-col py-[10px]" data-aos="fade-left">
            <h1 className="text-[30px] text-center font-semibold sofadi-one-regular">TechWar</h1>
            <h1 className="text-[15px] text-center tracking-[1px] font-medium">Welcome To Techwar</h1>
            <div className="input">
              <div className="first mb-[10px]">
              <label htmlFor="uname" className="text-[15px] text-[gray]">User Name Or Email</label><br />
              <input type="text" className=" w-full outline-none border-b mt-[5px] border-[black]" />
              </div>
              <div className="second ">
              <label htmlFor="uname" className="text-[15px] text-[gray]">Password</label><br />
              <input type="text" className="w-full outline-none border-b mt-[5px] border-[black]" />
              </div>
              
            </div>
            <div className="btn w-full flex justify-center">
              <button className="w-[150px] h-[40px] text-white text-[15px] font-semibold rounded-[8px] bg-[rgb(54,54,54)]" onClick={handelLogin}>Log In</button>
            </div>
          <div className="or flex items-center w-[full] justify-evenly">
            <div className="line1 w-[40%] border-b-[1.5px] border-[black]"></div>
            <h1>OR</h1>
            <div className="line1 w-[40%] border-b-[1.5px] border-[black]"></div>
          </div>
          <div className="btn w-full flex justify-center">
              <button className="w-[150px] h-[40px] text-[15px] flex justify-center items-center font-semibold rounded-[8px] bg-transparent border border-[#00000083]" onClick={handelLogin}><img className="w-[12%] me-[10px]" src="https://i.pinimg.com/474x/ff/62/9c/ff629c02385f2f3a199b7e0b3065d077.jpg" alt="" /> Google</button>
            </div>
          </div>
        </div>
          
        </div>
      )}
    </div>
  );
}
