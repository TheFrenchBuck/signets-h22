import firebaseConfig from './config';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";


// Initialiser Firebase
export const instanceFirebase = initializeApp(firebaseConfig);

// Initialisé FireBase Authentification
export const authFirebase = getAuth();

// Authentification dédéré Google
export const authGoogle = new GoogleAuthProvider();

// Initialiser Firestore
export const bdFirestore = getFirestore();