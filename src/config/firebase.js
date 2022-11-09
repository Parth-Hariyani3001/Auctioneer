import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyASFJefwRhHW5EJ1zF1cG6KxjL22_K7ddU",
  authDomain: "auctioneer2-2bd60.firebaseapp.com",
  projectId: "auctioneer2-2bd60",
  storageBucket: "auctioneer2-2bd60.appspot.com",
  messagingSenderId: "998550121026",
  appId: "1:998550121026:web:7a854f093cac9bde815bdb"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
