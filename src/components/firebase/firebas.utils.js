import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBumSOtJwnl5-sOXCIpkOHSOT5EYB466sI",
  authDomain: "crwn-clothing-db-4d091.firebaseapp.com",
  projectId: "crwn-clothing-db-4d091",
  storageBucket: "crwn-clothing-db-4d091.appspot.com",
  messagingSenderId: "527651480928",
  appId: "1:527651480928:web:85fa3d2c401c1893f46a05",
  measurementId: "G-BGS9TBTWSZ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
