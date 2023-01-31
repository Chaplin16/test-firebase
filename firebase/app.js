import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
// TODO: Replace the following with your app's Firebase project configuration
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