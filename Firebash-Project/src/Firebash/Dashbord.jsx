import React, { useEffect, useState } from "react";
import { auth, firestore } from "../../firebaseConfig";
import { addDoc, collection, doc, getDoc, getDocs, Query } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Aos from "aos";

export default function Dashbord() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);
  const [uname, setUname] = useState("");
  const [sub, setSub] = useState("");
  const [userdata, setUserdata] = useState("");
  const [record, setRecord] = useState([]);
  const [uid,setUid]=useState("")

  useEffect(()=>{
    let unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      if(currentUser){
        setUid(currentUser.uid)
      }else{
        console.log("something went wrong");
      }
    })
  },[])

  useEffect(()=>{
    fetchData()
  },[])

   const fetchData = async () => {
    let querySnapshot = await getDocs(collection(firestore, "students"));
    console.log(querySnapshot);
    
    let allData = querySnapshot.docs.map((doc) => ({ docId: doc.id, ...doc.data() }));
    console.log(allData);
    setRecord(allData);
  };

  const handelSubmit = async () => {
    await addDoc(collection(firestore, "students"),{
      id : uid,
      uname,
      sub,
    });

    setUname("")
    setSub("");
    // fetchuser();
    
  };

  // const fetchuser = async () => {
  //   let data = await getDoc(doc(firestore, "users", user1.uid));
  //   console.log(data.data());
  //   setUserdata(data.data());
  // };
  return (
    <div className="w-full h-[100vh] flex justify-center items-center overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="mainbox subbox w-[60%] h-[80vh] rounded-[10px]"
      >
        <h1 className="text-[35px] text-white font-bold">
          Welcome {userdata.fname} to Dashbord!
        </h1>
        <div className="input">
          <input
            type="text"
            placeholder="User Name"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            value={sub}
            onChange={(e) => setSub(e.target.value)}
          />
          <button onClick={handelSubmit}>Submit</button>
        </div>
        <div className="table">
          <table border="1" width="60%">
            <thead>
              <th>Uid</th>
              <th>Name</th>
              <th>Subject</th>
              <th colSpan={2}>Action</th>
            </thead>
            <tbody>
              {record ? (
                record.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td>{e.id}</td>
                      <td>{e.uname}</td>
                      <td>{e.sub}</td>
                      <td>
                        <button>edit</button>
                        <button>delete</button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <td>
                  <p>Loading..</p>
                </td>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

