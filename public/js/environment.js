// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJdsAbK4KMdeBgITSDuG1JlcD7_e82__0",
  authDomain: "heather-harrell.firebaseapp.com",
  projectId: "heather-harrell",
  storageBucket: "heather-harrell.appspot.com",
  messagingSenderId: "657591822480",
  appId: "1:657591822480:web:c78d3b01e471b5add3d015"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
