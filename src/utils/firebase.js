// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ2CZQHVlYvvUS-Xk2GQMTB9pIIlcb9wI",
  authDomain: "netflixgpt-e5910.firebaseapp.com",
  projectId: "netflixgpt-e5910",
  storageBucket: "netflixgpt-e5910.appspot.com",
  messagingSenderId: "508141216983",
  appId: "1:508141216983:web:74714277ae7e6cb381fc92",
  measurementId: "G-WN88ZF4T04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();