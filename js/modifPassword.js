import { auth } from "../firebase/auth.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
let btnSubmitModifPassword = document.getElementById("btnSubmitModifPassword");
let btnSubmitNewPassword = document.getElementById("btnSubmitNewPassword");


//change password with last and new password
btnSubmitModifPassword.addEventListener("click", function (event) {
    let formModifPassword = document.getElementById("formModifPassword");
    event.preventDefault();
  
    if (formModifPassword.reportValidity() == true) {
      //verification si le formulaire est correctement rempli
      let passwordChange = {
        email: document.getElementById("lastPassword").value,
        password: document.getElementById("newPassword").value,
        confirmPassword: document.getElementById("confirmNewPassword").value,    
        }

        /////
    }
});

//ask new password with email
btnSubmitNewPassword.addEventListener("click", function (event) {
    let formNewPassword = document.getElementById("formNewPassword");
    event.preventDefault();

    if (formModifPassword.reportValidity() == true) {
        let newPassword = {
            email: document.getElementById("emailNewPassword").value, 
        }

        const auth = getAuth();
        sendPasswordResetEmail(auth, newPassword.email)
        .then(() => {
            alert("Votre nouveau mot de passe vient de vous être envoyé sur votre messagerie 👍. Vous pourrez le modifier ensuite sur cette même page après votre identification.")
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Votre email n'est pas connu dans notre base de données😞. Veuillez écrire le même email que lors de votre inscription.")
        });
    }
);