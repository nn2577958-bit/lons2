// base.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// 🔹 Firebase 프로젝트 설정
const firebaseConfig = {
  apiKey: "AIzaSyBeoiT7Bh0r83YY4Ga52auTmA5X92DMzKQ",
  authDomain: "lons2-74bfa.firebaseapp.com",
  projectId: "lons2-74bfa",
  storageBucket: "lons2-74bfa.appspot.com",
  messagingSenderId: "734178165313",
  appId: "1:734178165313:web:395ed759777ec61f4b3cc0"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

console.log("✅ Firebase Initialized (Auth only)");
