// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAPn2ZTZjAxqX4WIzd8O43jq8cXD_8J1SE",   // 새 키
  authDomain: "rani-mall-firebase.firebaseapp.com",
  projectId: "rani-mall-firebase",
  storageBucket: "rani-mall-firebase.firebasestorage.app",
  messagingSenderId: "231199139441",
  appId: "1:231199139441:web:fe2e971c00a8282cb95dd0",
  measurementId: "G-KYFWJED24P",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);
export default app;
