// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVUGM6Nsv_Wh35w7b5fTN5AzNlPyoDMLA",
  authDomain: "netflix-gpt-3126a.firebaseapp.com",
  projectId: "netflix-gpt-3126a",
  storageBucket: "netflix-gpt-3126a.firebasestorage.app",
  messagingSenderId: "782991322707",
  appId: "1:782991322707:web:f73737aa5b4553a0c420a6",
  measurementId: "G-5YXYTFJS4D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
