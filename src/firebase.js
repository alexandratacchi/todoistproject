import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBQffvOAuptLfYUnFIj9oP6bfRzZRx0lDg",
    authDomain: "todoist-tut-cae63.firebaseapp.com",
    databaseURL: "https://todoist-tut-cae63.firebaseio.com",
    projectId: "todoist-tut-cae63",
    storageBucket: "todoist-tut-cae63.appspot.com",
    messagingSenderId: "871893759811",
    appId: "1:871893759811:web:430fa67fc041c60c4c21f6"
});

export {firebaseConfig as firebase};