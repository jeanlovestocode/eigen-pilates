// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import React, { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBqxjANNzn-YyQpqjW7-ngWl5gv5UqtLIg",
  authDomain: "eigen-pilates.firebaseapp.com",
  projectId: "eigen-pilates",
  storageBucket: "eigen-pilates.appspot.com",
  messagingSenderId: "749722469326",
  appId: "1:749722469326:web:38003a940453be0912219f",
  measurementId: "G-VK5C9SWPHW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

