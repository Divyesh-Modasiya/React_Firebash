// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARiQu7iUyzUmS2nxCKEOmAzngqp-OMu4Y",
  authDomain: "firebashdemo-803a4.firebaseapp.com",
  projectId: "firebashdemo-803a4",
  storageBucket: "firebashdemo-803a4.appspot.com",
  messagingSenderId: "557099730775",
  appId: "1:557099730775:web:c220e50a09f0a47bb1a012"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
export {auth,firestore}