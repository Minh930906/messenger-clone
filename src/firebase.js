import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDHTsfPNh3DJMqpuDcwp5Vu-lQKNBVClN4",
    authDomain: "messenger-clone-24fef.firebaseapp.com",
    databaseURL: "https://messenger-clone-24fef.firebaseio.com",
    projectId: "messenger-clone-24fef",
    storageBucket: "messenger-clone-24fef.appspot.com",
    messagingSenderId: "747794104596",
    appId: "1:747794104596:web:dfd41c6f7bef5cdc150201",
    measurementId: "G-Q5T2WGKKYT"
     
});

const db = firebaseApp.firestore();

export default db;