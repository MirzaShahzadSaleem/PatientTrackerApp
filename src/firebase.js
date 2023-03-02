// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import "firebase/firestore";
import 'firebase/storage'; 

const firebaseConfig = {

};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(fire);
// Initialize Cloud Firestore and get a reference to the service
export const db = fire.firestore();
export default fire;
