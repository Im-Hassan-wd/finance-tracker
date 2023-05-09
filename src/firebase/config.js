import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCN6XUDSnxrIZcvA8bq53wZt0dQ_Q15nKs",
  authDomain: "my-money-a0731.firebaseapp.com",
  projectId: "my-money-a0731",
  storageBucket: "my-money-a0731.appspot.com",
  messagingSenderId: "307303898741",
  appId: "1:307303898741:web:9672ddc911914cc0c6a23c",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
export const projectFirestore = firebase.firestore();
export const projectAuth = firebase.auth();

// timestamp
export const timestamp = firebase.firestore.Timestamp;
