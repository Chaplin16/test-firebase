import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getFirestore } from 'https://cdnjs.cloudflare.com/ajax/libs/firebase/9.16.0/firebase-firestore-lite.min.js';
import { getAuth } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBgqAF4dI6X_VGuLTxBvv0c-hJ5ZX0wj1I",
    authDomain: "fir-oc-c824f.firebaseapp.com",
    projectId: "fir-oc-c824f",
    storageBucket: "fir-oc-c824f.appspot.com",
    messagingSenderId: "40915862953",
    appId: "1:40915862953:web:d149495a1eabc4d400b0b8",
    measurementId: "G-6HMD1ZW3NC"
};


const app = initializeApp(firebaseConfig);
const firebase = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, auth, firebase };