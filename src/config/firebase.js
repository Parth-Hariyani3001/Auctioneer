import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyDUZHZTO5NNCWc3sIAY7jvZgKtrR3Gzx_A",
  authDomain: "auctioneer-f9e14.firebaseapp.com",
  projectId: "auctioneer-f9e14",
  storageBucket: "auctioneer-f9e14.appspot.com",
  messagingSenderId: "1074061247164",
  appId: "1:1074061247164:web:33aea37a6bdf34ee0a46b9"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
