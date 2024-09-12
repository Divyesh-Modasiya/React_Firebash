import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore } from "../firebaseConfig";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { Button, TextField } from "@mui/material";

function Crud() {
  const [fname, SetFname] = useState("");
  const [lname, SetLname] = useState("");
  const [email, SetEmail] = useState("");
  const [record, SetRecord] = useState(null);
  const [editi, SetEditi] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);
  useEffect(() => {
    fetchData();
  }, [record]);
  const fetchData = async () => {
    let querySnapshot = await getDocs(collection(firestore, "users"));
    let allData = querySnapshot.docs.map((doc) => ({
      docId: doc.id,
      ...doc.data(),
    }));
    SetRecord(allData);
  };
  const handleSubmit = async () => {
    if (editi === null || editi < 0) {
      await addDoc(collection(firestore, "users"), {
        fname,
        lname,
        email,
      });
    } else {
      await updateDoc(doc(firestore, "users", record[editi].docId), {
        fname,
        lname,
        email,
      });
      SetEditi(null);
    }

    SetFname("");
    SetLname("");
    SetEmail("");
    fetchData();
  };

  const handelDelete = async (index) => {
    await deleteDoc(doc(firestore, "users", record[index].docId));
    let data = record.filter((e, i) => i !== index);
    SetRecord(data);
  };

  const handelEdit = async (index) => {
    let mainData = record[index];
    SetFname(mainData.fname);
    SetLname(mainData.lname);
    SetEmail(mainData.email);
    SetEditi(index);
  };

  return (
    <div className="bg-black text-white h-[auto] mainBox">
      <h1 className="text-center text-[30px] py-[30px] font-bold backdrop-blur-xl">
        <span className="text-[red]">T</span>ODO{" "}
        <span className="text-[red]">L</span>IST
      </h1>

      <div className="input w-full flex justify-around   backdrop-blur-2xl">
        <div className="sub inputShadow w-[90%] h-[200px] flex justify-evenly items-center rounded-[10px]">
          <TextField
            label="Task"
            variant="outlined"
            margin="none"
            sx={{
              "& .MuiInputLabel-root": { color: "gray" }, // Change default label color
              "& .MuiInputLabel-root.Mui-focused": { color: "#02BACD" }, // Change label color when focused
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray", // Border color when not focused
                },
                "&:hover fieldset": {
                  borderColor: "gray", // Border color when hovered
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#02BACD", // Border color when focused
                },
                "& .MuiInputBase-input": {
                  color: "white", // Set the text color inside the field to white
                },
              },
            }}
            className=" mainText border border-[#616161] text-white  outline-none bg-transparent w-[250px] h-[40px] rounded-[5px] ps-[10px] drop-shadow-2xl"
            type="text"
            onChange={(e) => SetFname(e.target.value)}
            value={fname}
          />
          <TextField
            label="Name"
            variant="outlined"
            margin="none"
            sx={{
              "& .MuiInputLabel-root": { color: "gray" }, // Change default label color
              "& .MuiInputLabel-root.Mui-focused": { color: "#02BACD" }, // Change label color when focused
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray", // Border color when not focused
                },
                "&:hover fieldset": {
                  borderColor: "gray", // Border color when hovered
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#02BACD", // Border color when focused
                },
                "& .MuiInputBase-input": {
                  color: "white", // Set the text color inside the field to white
                },
              },
            }}
            className="border border-[#616161]  outline-none bg-transparent w-[250px] h-[40px] rounded-[5px] ps-[10px] drop-shadow-2xl"
            type="text"
            onChange={(e) => SetLname(e.target.value)}
            value={lname}
          />
          <TextField
            label="Email"
            variant="outlined"
            margin="none"
            sx={{
              "& .MuiInputLabel-root": { color: "gray" }, // Change default label color
              "& .MuiInputLabel-root.Mui-focused": { color: "#02BACD" }, // Change label color when focused
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray", // Border color when not focused
                },
                "&:hover fieldset": {
                  borderColor: "gray", // Border color when hovered
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#02BACD", // Border color when focused
                },
                "& .MuiInputBase-input": {
                  color: "white", // Set the text color inside the field to white
                },
              },
            }}
            className="border border-[#616161] outline-none bg-transparent w-[250px] h-[40px] rounded-[5px] ps-[10px] drop-shadow-2xl"
            type="text"
            onChange={(e) => SetEmail(e.target.value)}
            value={email}
          />

          <Button
          variant="contained"
          sx={{
            backgroundColor: '#02BACD', // Change to your desired color
            color: 'white',
            '&:hover': {
              backgroundColor: '#006E85', // Change hover color here
            },
            marginTop: 2, 
          }}
            className="w-[15%] h-[40px]  border border-[#616161] rounded-[20px]"
            onClick={handleSubmit}
          >
            {editi == null ? "Submit" : "Update"}
          </Button>
        </div>
        {/* <div className="inputShadow btnBox w-[15%] rounded-[10px] flex justify-center items-center">
            
            </div> */}
      </div>

      <div className="line w-[90%] border border-[#616161] ms-[5%] my-[50px]"></div>
          <h1 className="text-[33px] font-bold pb-[40px] text-center"><span className="text-[red]">Y</span>our <span className="text-[red]">D</span>ata</h1>
      <div className="main w-[full] backdrop-blur-[20px] pb-[100px]">
        <table
          className="w-[90%] inputShadow rounded-[10px] ms-[5%]"
          border="1"
          width="100%"
          cellPadding={15}
        >
          <thead className="text-[20px]">
            <th>
              <span className="text-[red]">T</span>ask
            </th>
            <th>
              <span className="text-[red]">N</span>ame
            </th>
            <th>
              <span className="text-[red]">E</span>mail
            </th>
            <th colSpan={2}>
              <span className="text-[red]">A</span>ction
            </th>
          </thead>
          <tbody align="center">
            {record ? (
              record.map((e, i) => {
                return (
                  <tr key={i} className="rounded-[20px]" data-aos="fade-right">
                    <td>{e.fname}</td>
                    <td>{e.lname}</td>
                    <td>{e.email}</td>
                    <td>
                      <button className="" onClick={() => handelEdit(i)}>
                        <FaEdit className="text-[#2bcc2b] text-[22px]" />
                      </button>
                    </td>
                    <td>
                      <button onClick={() => handelDelete(i)}>
                        <MdDeleteSweep className="text-[#ff2121] text-[25px]" />
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <p>Loading..</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Crud;
