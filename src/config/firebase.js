import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyCTiT6TfCiI3GZpBcW4_YddDr0I2bkaw78",
  authDomain: "auctioneer2-ce00c.firebaseapp.com",
  projectId: "auctioneer2-ce00c",
  storageBucket: "auctioneer2-ce00c.appspot.com",
  messagingSenderId: "461722241242",
  appId: "1:461722241242:web:f0ea64fa9bbed454573de3"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
