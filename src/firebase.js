import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArFsyHfC5Rub9uVXRLHQkmRiaYuPn2soE",
  authDomain: "porto-8b1bd.firebaseapp.com",
  projectId: "porto-8b1bd",
  storageBucket: "porto-8b1bd.firebasestorage.app",
  messagingSenderId: "311772203435",
  appId: "1:311772203435:web:0aa51928beef122d13aaee",
  measurementId: "G-05SCS2JECP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };

