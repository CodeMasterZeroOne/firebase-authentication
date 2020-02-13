import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCfmTRkbZlQTy0BguU1lkROqW4hEveMIqo",
    authDomain: "fb-authentication0.firebaseapp.com",
    databaseURL: "https://fb-authentication0.firebaseio.com",
    projectId: "fb-authentication0",
    storageBucket: "fb-authentication0.appspot.com",
    messagingSenderId: "736180209863",
    appId: "1:736180209863:web:051ad40f967786436596e2",
    measurementId: "G-MHXCMT32MV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();


export default firebase;