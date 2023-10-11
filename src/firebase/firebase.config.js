// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBELChG9cyLpsBFnRRP8fi81KvyNHjBOI",
  authDomain: "shared-firebase-auth.firebaseapp.com",
  projectId: "shared-firebase-auth",
  storageBucket: "shared-firebase-auth.appspot.com",
  messagingSenderId: "954005736985",
  appId: "1:954005736985:web:cc399cd80be0e0c73de488"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;