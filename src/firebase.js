import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAExNO_ALbEa5_U0ou8Mn51TQyvbbQBRvc",
    authDomain: "react-9-43f35.firebaseapp.com",
    projectId: "react-9-43f35",
    storageBucket: "react-9-43f35.appspot.com",
    messagingSenderId: "130047117796",
    appId: "1:130047117796:web:65d5ddf3b6797d59a89ff1",
    measurementId: "G-G1BGDKCCQH"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();