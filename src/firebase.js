// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_APP_FIREBASE_KEY,
  authDomain: "barb-ec9b5.firebaseapp.com",
  projectId: "barb-ec9b5",
  storageBucket: "barb-ec9b5.appspot.com",
  messagingSenderId: "738869395037",
  appId: "1:738869395037:web:bfde09f14503062d0897b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);