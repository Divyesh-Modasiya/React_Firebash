import React, { useEffect, useState } from "react";
import { auth, firestore } from "../../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Aos from "aos";

function Signup() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true, 
    });
  }, []);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const signup = () => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((user) => {
        console.log(user.user.uid);
        setDoc(doc(firestore, "users", user.user.uid), {
          fname,
          lname,
          email,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/deshbord");
  };
  return (
    <div className="w-full h-[100vh] flex justify-evenly items-center bg-[#ffffff]">
      <div className="mainbox w-[60%] h-[80vh] rounded-[10px] flex overflow-hidden">
        <div data-aos="fade-right"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine" className="firstbox w-[50%] h-full flex justify-evenly items-center">
          <div className="text w-[80%] h-[220px] text-[white] text-center flex flex-col justify-evenly items-center">
            <h1 className="text-[35px] tracking-[2px] font-bold">
              Welcome Back!
            </h1>
            <p className="text-[15px] tracking-[0.5px]">
              To keep connected with us please login with your personal info
            </p>
            <Link to="login" className="border text-[13px] font-bold w-[50%] h-[35px] rounded-[15px] flex justify-center items-center">
            <button >
              LOG IN
            </button>
            </Link>
          </div>
        </div>
        <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine" className="secondbox w-[50%] h-full bg-white ">
          <div className="text2 flex flex-col justify-evenly items-center h-full py-[30px]">
            <h1 className="text-[35px] font-bold mt-[20px]">Create Account</h1>
            <div className="icon flex justify-evenly w-[50%]">
              <div className="w-[40px] h-[40px] flex justify-center items-center border border-[#000000a4] rounded-[50%] hover:bg-[#00000036] cursor-pointer transition ease-in-out delay-200">
                <FaFacebookF />
              </div>
              <div className="w-[40px] h-[40px] flex justify-center items-center border border-[#000000a4] rounded-[50%]  hover:bg-[#00000036] cursor-pointer transition ease-in-out delay-200">
                <FaGooglePlusG />
              </div>
              <div className="w-[40px] h-[40px] flex justify-center items-center border border-[#000000a4] rounded-[50%]  hover:bg-[#00000036] cursor-pointer transition ease-in-out delay-200">
                <FaLinkedinIn />
              </div>
            </div>
            <p className="text-[14px] text-[#4d4d4d]">
              or use your email for registration
            </p>
            <input
              type="text"
              className="w-[270px] h-[35px] border bg-[#EEEEEE] ps-[15px] outline-none"
              placeholder="Name"
              onChange={(e) => setFname(e.target.value)}
            />
            <input
              type="text"
              className="w-[270px] h-[35px] border bg-[#EEEEEE] ps-[15px] outline-none"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="w-[270px] h-[35px] border bg-[#EEEEEE] ps-[15px] outline-none"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
            />
            <button
              className="w-[50%] h-[40px] rounded-[25px] text-white text-[15px] font-semibold bg-[#FF4744] hover:bg-[#FF4B2D] border transition-[1s]"
              onClick={signup}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
