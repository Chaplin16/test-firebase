import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from "firebase/analytics";

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
const analytics = getAnalytics(app);

// import { getDatabase } from "/firebase/database";
// import { collection } from "/firebase/firestore";

// const imagesCollectionRef = collection(db, 'Images');
// const database = getDatabase();
// console.log(imagesCollectionRef)

import { 
    getFirestore,
    getDoc,
    doc, } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
const db = getFirestore(app);
    async function getUser() {
    const docRef = doc(db, "Images", "uid");
    const docSnap = await getDoc(docRef)
}

let ref = docSnap.data().ref;
console.log(ref);