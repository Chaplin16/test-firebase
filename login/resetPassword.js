import { auth } from "../service/firebase.js";
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
let btnSubmitResetPassword = document.getElementById("btnSubmitResetPassword");


//reset password with email
btnSubmitResetPassword.addEventListener("click", function (event) {
    let formResetPassword = document.getElementById("formResetPassword");
    let email = document.getElementById("emailResetPassword");
    let resetPassword = document.getElementById("reset-password");
    let resetPasswordWrong = document.getElementById("reset-password-wrong");
    event.preventDefault();

    if (formResetPassword.reportValidity() == true) {
        let reset = {
            email: email.value, 
        }

        const auth = getAuth();
        sendPasswordResetEmail(auth, reset.email)
        .then(() => {
            resetPassword.style.display = "block";
            email = "";
        })
        .catch((error) => {
            email.style.border = "1px solid red";
            resetPasswordWrong.style.display = "block";
            setTimeout(function() {
                email.style.border = "none";
                resetPasswordWrong.style.display = "none";
                email.value = "";
              }, 2000);
        });
    }
});