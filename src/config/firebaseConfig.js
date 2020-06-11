import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyB5nMtLlWC9TaNamN3SWO-1sozXbeih2do",
  authDomain: "todo-d1b7e.firebaseapp.com",
  databaseURL: "https://todo-d1b7e.firebaseio.com",
  projectId: "todo-d1b7e",
  storageBucket: "todo-d1b7e.appspot.com",
  messagingSenderId: "456019758360",
  appId: "1:456019758360:web:928bbecc2dab4b313d226d",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
