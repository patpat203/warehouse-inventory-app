
// Import Firebase libraries (v9 modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3UPBnfds5EekQDlXGekKWk9fdArOEXCk",
  authDomain: "warehouse-inventory-app-f7d47.firebaseapp.com",
  projectId: "warehouse-inventory-app-f7d47",
  storageBucket: "warehouse-inventory-app-f7d47.firebasestorage.app",
  messagingSenderId: "635173216947",
  appId: "1:635173216947:web:3fb2e4a5a41852caffc6c6",
  measurementId: "G-P6CGDCWKN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Make Firestore accessible globally
window.db = db;
