import React, { useEffect, useState } from "react";
import { auth } from "../../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Aos from "aos";

export default function Login() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true, 
    });
  }, []);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const login = () => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((user) => {
        console.log(user);
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
     data-aos-easing="ease-in-sine" className="secondbox w-[50%] h-full bg-white ">
          <div className="text2 flex flex-col justify-evenly items-center h-full py-[30px]">
            <h1 className="text-[35px] font-bold mt-[20px]">Log in</h1>
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
              className="w-[270px] h-[35px] border bg-[#EEEEEE] ps-[15px] outline-none"
              type="text"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-[270px] h-[35px] border bg-[#EEEEEE] ps-[15px] outline-none"
              type="text"
              placeholder="Enter Your Password"
              onChange={(e) => setPass(e.target.value)}
            />
            <button
              className="w-[50%] h-[40px] rounded-[25px] text-white text-[15px] font-semibold bg-[#FF4744] hover:bg-[#FF4B2D] border transition-[1s]"
              onClick={login}
            >
              Log In
            </button>
          </div>
        </div>
        <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine" className="firstbox w-[50%] h-full flex justify-evenly items-center">
          <div className="text w-[80%] h-[220px] text-[white] text-center flex flex-col justify-evenly items-center">
            <h1 className="text-[35px] tracking-[2px] font-bold">
            Hello, Friend!
            </h1>
            <p className="text-[15px] tracking-[0.5px]">
            Enter your personal details and start journey with us
            </p>
            <Link to="/" className="border text-[13px] font-bold w-[50%] h-[35px] rounded-[15px] flex justify-center items-center">
            <button className="text-center">
              SIGN UP
            </button>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}
