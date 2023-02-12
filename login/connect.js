import { auth } from "../service/firebase.js";
import { signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
let email = document.getElementById("email");
let password = document.querySelector("#password");
let errorMessage = document.querySelector(".error-message");

document.getElementById("btnSubmit").addEventListener('click', function(event) {
  let formLogin = document.getElementById("formLogin");
  event.preventDefault();
  
  if (formLogin.reportValidity() == true) {
    let contact = {
      email: email.value,
      password: password.value,
    };
    
    //j'envoie des données au serveur
    signInWithEmailAndPassword(auth,contact.email, contact.password)
        .then((userCredential) => {
          localStorage.setItem("user", JSON.stringify(userCredential.user));  
          window.location.assign("../index.html")  
          })
      .catch((error) => {
          email.style.border = "1px solid red";
          password.style.border = "1px solid red";
          errorMessage.style.display = "block";
          setTimeout(function() {
            email.style.border = "none";
            password.style.border = "none";
            errorMessage.style.display = "none";
            email.value = "";
            password.value = "";
          }, 2000);
      })    
    }
});
