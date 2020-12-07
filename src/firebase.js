import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCYdSx8Xgb3YHTSE11VC7F06QBIPqqlxLQ",
    authDomain: "qwashy-3915.firebaseapp.com",
    projectId: "qwashy-3915",
    storageBucket: "qwashy-3915.appspot.com",
    messagingSenderId: "443231590413",
    appId: "1:443231590413:web:a12a7c8d0b1490781c1d44",
    measurementId: "G-5CKSJ5VJFV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export const DB = firebase.firestore()
  export default firebase