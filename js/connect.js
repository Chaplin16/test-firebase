import { auth } from "../backend/firebase/auth.js";
import { signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
let btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", function (event) {
  let formLogin = document.getElementById("formLogin");
  let connect = document.getElementById("connect");
  let linkTop = document.getElementById("linkTop");
  let linkTop1 = document.getElementById("linkTop1");

  event.preventDefault();

  if (formLogin.reportValidity() == true) {
    //verification si le formulaire est correctement rempli
    let contact = {
      // je cree un objet avec les valeurs que je recupere par les id
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    
    //j'envoie des données au serveur
    signInWithEmailAndPassword(auth, contact.email, contact.password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        console.log(user)
        alert("Vous êtes connecté 👍")
        window.location.assign("index.html")
 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Votre mot de passe / votre mail  est différent de celui de l'inscription!")

      });
  }
});
