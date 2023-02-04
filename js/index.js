let user = JSON.parse(sessionStorage.getItem("username"));
let connect = document.getElementById("connect");

if(user != null){
    connect.innerHTML = `   <div>
    <div id="user">
    Bonjour ${user} 
    <img id="iconMenu" src="images/icon-arrow-menu.png" alt="icone menu déroulant"> 
    </div>
    <button id="disconnect">Se déconnecter</button>
    </div>`
}

let iconMenu = document.getElementById("iconMenu");
let disconnect = document.getElementById("disconnect");
iconMenu.addEventListener("click", function() {
    if(disconnect.style.display == "none"){
       disconnect.style.display = "block"
    } else {
        disconnect.style.display = "none"
    }
});

