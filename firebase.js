// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyACDNgJpxqJM5P47c5D3HfIQIlpLfEjiKY",
  authDomain: "rani-mall-firebase.firebaseapp.com",
  projectId: "rani-mall-firebase",
  storageBucket: "rani-mall-firebase.firebasestorage.app",
  messagingSenderId: "231199139441",
  appId: "1:231199139441:web:fe2e971c00a8282cb95dd0",
  measurementId: "G-KYFWJED24P"
};

const app = initializeApp(firebaseConfig);

// index.html에서 쓰려고 export
export const auth = getAuth(app);
