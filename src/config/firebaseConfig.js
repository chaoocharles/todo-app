import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA7fxogBZE1BBy1uASm2HsNPaF5vxMyRQo",
  authDomain: "todo-list-e89a1.firebaseapp.com",
  databaseURL: "https://todo-list-e89a1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-list-e89a1",
  storageBucket: "todo-d1b7e.appspot.com",
  messagingSenderId: "456019758360",
  appId: "1:456019758360:web:928bbecc2dab4b313d226d",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
