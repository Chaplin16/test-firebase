import { auth } from "../backend/firebase/auth.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
let btnSubmitResetPassword = document.getElementById("btnSubmitResetPassword");

//reset password with email
btnSubmitResetPassword.addEventListener("click", function (event) {
    let formResetPassword = document.getElementById("formResetPassword");
    event.preventDefault();

    if (formResetPassword.reportValidity() == true) {
        let resetPassword = {
            email: document.getElementById("emailResetPassword").value, 
        }

        const auth = getAuth();
        sendPasswordResetEmail(auth, resetPassword.email)
        .then(() => {
            alert("Votre nouveau mot de passe vient de vous être envoyé sur votre messagerie 👍. Vous pourrez en créer un autre en suivant la procédure.")
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Votre email n'est pas connu dans notre base de données😞. Veuillez écrire le même email que lors de votre inscription.")
        });
    }
});