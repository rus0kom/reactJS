import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCIGtya1boNq70K2ei9HCB9GJdt-uthbFY",
  authDomain: "tienda-random-coderhouse.firebaseapp.com",
  projectId: "tienda-random-coderhouse",
  storageBucket: "tienda-random-coderhouse.appspot.com",
  messagingSenderId: "592813800184",
  appId: "1:592813800184:web:2fae42d4a9eef5ec0ad90d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)