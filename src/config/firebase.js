import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyBv0VZ9zZ1rSBS2HYf0UZH-ciL7qqLH6gY",
  authDomain: "auctioneer-93ca2.firebaseapp.com",
  projectId: "auctioneer-93ca2",
  storageBucket: "auctioneer-93ca2.appspot.com",
  messagingSenderId: "53549720238",
  appId: "1:53549720238:web:67a3265cc2f7ba5177c33f"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
