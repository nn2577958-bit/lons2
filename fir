// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBeoiT7Bh0r83YY4Ga52auTmA5X92DMzKQ",
  authDomain: "lons2-74bfa.firebaseapp.com",
  projectId: "lons2-74bfa",
  storageBucket: "lons2-74bfa.firebasestorage.app",
  messagingSenderId: "734178165313",
  appId: "1:734178165313:web:395ed759777ec61f4b3cc0",
  measurementId: "G-LC2JJD493M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
