import { auth } from "../backend/firebase/auth.js";
import { signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
let btnSubmit = document.getElementById("btnSubmit");

let connect = document.getElementById("connect");

connect.innerHTML += `<ul>
               <a href="connect.html" class="buttonConnect" id="user">Bonjour ${info.username}</a>
               <li>
                  <a href="#" id="disconnect">Se déconnecter</a>
               </li>
            </ul>`




btnSubmit.addEventListener("click", function (event) {
  let formLogin = document.getElementById("formLogin");
  event.preventDefault();

  if (formLogin.reportValidity() == true) {
    //verification si le formulaire est correctement rempli
    let contact = {
      // je cree un objet avec les valeurs que je recupere par les id
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    
    //j'envoie des données au serveur
    signInWithEmailAndPassword(auth,contact.email, contact.password)
      .then((userCredential) => {
        const user = userCredential.user;
        const info = JSON.parse(sessionStorage.getItem("username"));
        sessionStorage.setItem("user", JSON.stringify(user));  
        sessionStorage.setItem("username",JSON.stringify(contact.username));  
        window.location.assign("index.html")      

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Votre mot de passe / votre mail  est différent de celui de l'inscription!")

      });
  }
});
