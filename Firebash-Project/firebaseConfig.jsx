// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUlsaFf5przyljcCgVdKJ_iuA68z_sCU4",
  authDomain: "fir-project-163c6.firebaseapp.com",
  projectId: "fir-project-163c6",
  storageBucket: "fir-project-163c6.appspot.com",
  messagingSenderId: "214149866943",
  appId: "1:214149866943:web:5255b32b26ce103a396d0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {auth,firestore}
