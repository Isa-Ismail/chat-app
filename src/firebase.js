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
  apiKey: "AIzaSyCdBPjPQ9ODp3nIJ06feqQhpbn73gBV004",
  authDomain: "sec-chat-4af4f.firebaseapp.com",
  projectId: "sec-chat-4af4f",
  storageBucket: "sec-chat-4af4f.appspot.com",
  messagingSenderId: "435051244189",
  appId: "1:435051244189:web:bfa76fa320a019d7e14274"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();