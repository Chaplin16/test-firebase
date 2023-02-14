let user = JSON.parse(localStorage.getItem("user"));
let connect = document.getElementById("connect");
let pseudo = sessionStorage.getItem("pseudo")

//appear username connected's name 
if(user != null){
    pseudo = pseudo != null ? pseudo : user.email
    connect.innerHTML = `   
    <div>
        <div id="user">
            Bonjour ${pseudo} 🙂
            <img id="navIcon" src="../images/icon-arrow-menu.png" alt="icone menu déroulant"> 
        </div>
        <div class="navConnect">
            <button id="navUpdateProfil">Modifier son profil</button>
            <button id="navDisconnect">Se déconnecter</button>
        </div>
    </div>`
        
    let changePhotoCarousel = document.getElementById("changePhotoCarousel");
    changePhotoCarousel.style.visibility = "visible";

    let changePhotoGallery = document.getElementById("changePhotoGallery");
    changePhotoGallery.style.visibility = "visible";
}

//appear btn disconnected 
let icon = document.getElementById("navIcon");
let disconnect = document.getElementById("navDisconnect");
let updateProfil = document.getElementById("navUpdateProfil");
if(icon != null){
    icon.addEventListener("click", function() {
        if(disconnect.style.visibility == "hidden"){
            disconnect.style.visibility = "visible"
        } else {
            disconnect.style.visibility = "hidden"
        }

        if(updateProfil.style.visibility == "hidden"){
            updateProfil.style.visibility = "visible"
        } else {
            updateProfil.style.visibility = "hidden"
        }
    })
}

if(updateProfil != null) {
    updateProfil.addEventListener('click', function() {
        window.location = "../login/profil.html";
    })
}

//disconnected user
if(disconnect != null){
    disconnect.addEventListener('click', function (event) {
        localStorage.clear(user);
        window.location.reload();
        window.location = "index.html";
    })
};
