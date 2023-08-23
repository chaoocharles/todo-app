import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyChBGLlD5AGp1qDHQch88nDwih8VC9kgyU",
  authDomain: "todo-app-f1677.firebaseapp.com",
  projectId: "todo-app-f1677",
  storageBucket: "todo-app-f1677.appspot.com",
  messagingSenderId: "412530869425",
  appId: "1:412530869425:web:2ab1a76fe7186263b7ce90",
  measurementId: "G-DQZGHNJWND"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
