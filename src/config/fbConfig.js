import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'


const firebaseConfig = {
    apiKey: "AIzaSyCF99CqZndPzuTVjE0g0vJ3uQlvfWrz6fU",
    authDomain: "marioplan-df136.firebaseapp.com",
    databaseURL: "https://marioplan-df136.firebaseio.com",
    projectId: "marioplan-df136",
    storageBucket: "marioplan-df136.appspot.com",
    messagingSenderId: "7202008173",
    appId: "1:7202008173:web:8aaec3b567ef7b436a6364",
    measurementId: "G-KHMLY7R27V"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings( {})
firebase.analytics();

export default firebase;