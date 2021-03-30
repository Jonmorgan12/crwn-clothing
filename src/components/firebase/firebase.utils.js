import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { userRef } from "react";

const config = {
  apiKey: "AIzaSyBumSOtJwnl5-sOXCIpkOHSOT5EYB466sI",
  authDomain: "crwn-clothing-db-4d091.firebaseapp.com",
  projectId: "crwn-clothing-db-4d091",
  storageBucket: "crwn-clothing-db-4d091.appspot.com",
  messagingSenderId: "527651480928",
  appId: "1:527651480928:web:85fa3d2c401c1893f46a05",
  measurementId: "G-BGS9TBTWSZ",
};

//takes user auth object from authentication library and then stores it inside of our database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  //checking if there is any data in that place, if there is not create a new user useing the data from our user auth obj
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
