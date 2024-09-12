// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-kw7IxdfstCerhxCg3BRGnPf2zKHQ2KU",
  authDomain: "crud-project-1-6b85c.firebaseapp.com",
  projectId: "crud-project-1-6b85c",
  storageBucket: "crud-project-1-6b85c.appspot.com",
  messagingSenderId: "221719430362",
  appId: "1:221719430362:web:f911d109434ba0445c11e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {firestore}
