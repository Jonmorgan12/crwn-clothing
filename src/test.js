import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

//get me the collection called users, from this collection get me the specific document with this id to that specific user, we want the collection called cart items from this collection get me the specific document with this id
firestore
  .collection("users")
  .doc("FdbeW6qDNHT0kR9xksYI")
  .collection("cartItems")
  .doc("Qe44uA9ymK3cNd38BAzy");

//same as above ^^^
// firestore.doc("/users/FdbeW6qDNHT0kR9xksYI/cartItems/Qe44uA9ymK3cNd38BAzy");
// firestore.collection("/users/FdbeW6qDNHT0kR9xksYI/cartItems")
