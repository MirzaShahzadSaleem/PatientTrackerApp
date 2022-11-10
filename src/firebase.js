// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import "firebase/firestore";
import 'firebase/storage'; 

const firebaseConfig = {
  apiKey: "AIzaSyAqBPeBCx2g8eg25REjBJ8xwb3o3oY-Z44",
  authDomain: "patient-tracker-1db10.firebaseapp.com",
  projectId: "patient-tracker-1db10",
  storageBucket: "patient-tracker-1db10.appspot.com",
  messagingSenderId: "653138887080",
  appId: "1:653138887080:web:a264f836a6d470fb999d9d",
  measurementId: "G-363CXVGPP9"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(fire);
// Initialize Cloud Firestore and get a reference to the service
export const db = fire.firestore();
export default fire;