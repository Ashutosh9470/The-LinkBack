// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGXT7TmyycD-TZV-RWu0nyr3PmeXLrgi8",
  authDomain: "hackatron-7bb5a.firebaseapp.com",
  projectId: "hackatron-7bb5a",
  storageBucket: "hackatron-7bb5a.firebasestorage.app",
  messagingSenderId: "458740684448",
  appId: "1:458740684448:web:d939b3a15dbc8156afdbc5",
  measurementId: "G-FMGQ66S333"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);