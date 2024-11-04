import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // Import Firebase Storage

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyAaY-NE4JiPVwPkheovGTg-HjmthsG41o0",
  authDomain: "new-4eae0.firebaseapp.com",
  projectId: "new-4eae0",
  storageBucket: "new-4eae0.appspot.com",
  messagingSenderId: "1045092830210",
  appId: "1:1045092830210:web:4b578e58c918368da2eb1b",
  measurementId: "G-CW54NRD8JH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize Firebase Storage

export { db, storage, collection, addDoc };
