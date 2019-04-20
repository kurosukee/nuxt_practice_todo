import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyADgDPxSPczJuLZM5mzvlTvWzLE2MICJ1c",
    authDomain: "test-26122.firebaseapp.com",
    databaseURL: "https://test-26122.firebaseio.com",
    projectId: "test-26122",
    storageBucket: "test-26122.appspot.com",
    messagingSenderId: "262036124902"
  };
  firebase.initializeApp(config);

  export default firebase;