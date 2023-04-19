import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD7L1teXl2zu8Dyd5RDnGdySfN0oaJzbT0",
    authDomain: "shaira-lucero-project.firebaseapp.com",
    projectId: "shaira-lucero-project",
    storageBucket: "shaira-lucero-project.appspot.com",
    messagingSenderId: "695839962445",
    appId: "1:695839962445:web:6ab4d30a2bba4876033304",
    measurementId: "G-SXFKZEJTGP"
});

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }