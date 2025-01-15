import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyArFsyHfC5Rub9uVXRLHQkmRiaYuPn2soE",
    authDomain: "porto-8b1bd.firebaseapp.com",
    projectId: "porto-8b1bd",
    storageBucket: "porto-8b1bd.firebasestorage.app",
    messagingSenderId: "311772203435",
    appId: "1:311772203435:web:0aa51928beef122d13aaee",
    measurementId: "G-05SCS2JECP"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };