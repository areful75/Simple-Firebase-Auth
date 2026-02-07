// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCajmn0XgRJ8wmNG9WqJ1hotTvJTijG-CE",
  authDomain: "simple-firebase-auth-6cea2.firebaseapp.com",
  projectId: "simple-firebase-auth-6cea2",
  storageBucket: "simple-firebase-auth-6cea2.firebasestorage.app",
  messagingSenderId: "761377910641",
  appId: "1:761377910641:web:4e1ea22ebabe0966c350d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);