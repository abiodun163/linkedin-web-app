import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKBIAmrj-FGgOxHEHwH5XCXNClPo-X95g",
  authDomain: "linkedin-web-app-e922a.firebaseapp.com",
  projectId: "linkedin-web-app-e922a",
  storageBucket: "linkedin-web-app-e922a.appspot.com",
  messagingSenderId: "117882080617",
  appId: "1:117882080617:web:c64797ba01d274c7ff81f8",
  measurementId: "G-1F6XZ9KGW5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };