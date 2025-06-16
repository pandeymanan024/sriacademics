import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC0cxgA0bt73seZ1Co3TJIXPhcRJa2y66E",
    authDomain: "tutor-8d2e9.firebaseapp.com",
    databaseURL: "https://tutor-8d2e9-default-rtdb.firebaseio.com/",
    projectId: "tutor-8d2e9",
    storageBucket: "tutor-8d2e9.appspot.com",
    messagingSenderId: "317317669118",
    appId: "1:317317669118:web:6b77752aac53d15d1445af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
