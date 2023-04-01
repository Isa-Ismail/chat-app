// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmFZTZLrC0jlbvcSPEpqf76Um_oGMEi4M",
  authDomain: "last-try-df55b.firebaseapp.com",
  projectId: "last-try-df55b",
  storageBucket: "last-try-df55b.appspot.com",
  messagingSenderId: "965600593102",
  appId: "1:965600593102:web:e2b12d4b4c9cdeaf9f7c9f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();