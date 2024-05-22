// Import the functions you need from the SDKs you need
import { deleteApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX1Pmiu5G8SQ5zT98meaxsNHG1rnYtSj4",
  authDomain: "fitpire.firebaseapp.com",
  projectId: "fitpire",
  storageBucket: "fitpire.appspot.com",
  messagingSenderId: "772201783815",
  appId: "1:772201783815:web:7a6032904fd037f7cd80a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a Firestore instance
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;