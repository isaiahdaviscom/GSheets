// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { Database } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZGYGYhrPIASx9vHh2ZwEkxvsPFSySjlc",
  authDomain: "gsheets-clone.firebaseapp.com",
  projectId: "gsheets-clone",
  storageBucket: "gsheets-clone.appspot.com",
  messagingSenderId: "280661544270",
  appId: "1:280661544270:web:3654c4f067d7cf5e5a621f",
  measurementId: "G-GVSJW4XVJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();