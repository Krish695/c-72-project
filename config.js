import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {

  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   