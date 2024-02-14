// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI4GD5-G5Icdxj9FEXG9smTqFb6cnhOWw",
  authDomain: "my-413812.firebaseapp.com",
  projectId: "myyoutube-413812",
  storageBucket: "myyoutube-413812.appspot.com",
  messagingSenderId: "119613469394",
  appId: "1:119613469394:web:b1ef7db082f5c5d641330b",
  measurementId: "G-N4W40Q7ZYZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
