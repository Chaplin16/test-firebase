import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { fileName } from "../../js/index.js"
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, getDoc, doc, } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBgqAF4dI6X_VGuLTxBvv0c-hJ5ZX0wj1I",
  authDomain: "fir-oc-c824f.firebaseapp.com",
  projectId: "fir-oc-c824f",
  storageBucket: "fir-oc-c824f.appspot.com",
  messagingSenderId: "40915862953",
  appId: "1:40915862953:web:d149495a1eabc4d400b0b8",
  measurementId: "G-6HMD1ZW3NC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

// Create a child reference
const imagesRef = ref(storage, 'imagesCarousel');

const storageRef = ref(imagesRef, `imagesCarousel/${fileName.name}`);

uploadBytes(storageRef, file).then((snapshot) => {
  console.log('Fichier téléchargé🥳!');
});

// let newImageRef = imagesRef.push();

// newImageRef.set({
//   name: $(fileName.name).val()
// })



// Initialize Cloud Firestore and get a reference to the service
// import { 
//     getFirestore,
//     getDoc,
//     doc, } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
// const db = getFirestore(app);
//     async function getUser() {
//     const docRef = doc(db, "Images", uid);
//     const docSnap = await getDoc(docRef)
// }

// let ref = docSnap.data().ref;
// console.log(ref);

import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"; 
import {database } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"
// try {
//   const docRef = await addDoc(collection(db, "Images"), {
//     ref:'chat.png'
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }


// const querySnapshot = await getDocs(collection(db, "Images"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

