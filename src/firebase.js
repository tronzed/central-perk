// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhU5MLhniOxphEXV_QQlIjnca9oQM1yGA",
  authDomain: "centralperk-81a87.firebaseapp.com",
  databaseURL: "https://centralperk-81a87-default-rtdb.firebaseio.com",
  projectId: "centralperk-81a87",
  storageBucket: "centralperk-81a87.firebasestorage.app",
  messagingSenderId: "135977286454",
  appId: "1:135977286454:web:583520714f64b2215f5197"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
