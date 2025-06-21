
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGL6YJ-UUYEEpjHReRaeSIFiDnJ7_Y2-0",
  authDomain: "project-9158438689752882131.firebaseapp.com",
  projectId: "project-9158438689752882131",
  storageBucket: "project-9158438689752882131.firebasestorage.app",
  messagingSenderId: "987946656331",
  appId: "1:987946656331:web:319fe52ad1a46cf51e63ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
