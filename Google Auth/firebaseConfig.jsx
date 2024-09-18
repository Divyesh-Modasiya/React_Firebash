// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAuth, GoogleAuthProvider } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxWcUaoWzOQF8G5c-KNd5vBwiAzC5FD7Q",
  authDomain: "a-9f93e.firebaseapp.com",
  projectId: "a-9f93e",
  storageBucket: "a-9f93e.appspot.com",
  messagingSenderId: "321812719104",
  appId: "1:321812719104:web:40aa83b5404cf635101ae5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider

export{auth,provider}