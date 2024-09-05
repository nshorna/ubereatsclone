import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD5m9V3SR1Zu5HZnn1iElDGNrKaFZ1nog",
  authDomain: "uber-eats-web.firebaseapp.com",
  projectId: "uber-eats-web",
  storageBucket: "uber-eats-web.appspot.com",
  messagingSenderId: "732735516712",
  appId: "1:732735516712:web:ed69f933390c7c23d0051d",
  measurementId: "G-FE7T4E9X7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
