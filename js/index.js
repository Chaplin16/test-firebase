let user = JSON.parse(sessionStorage.getItem("username"));
let connect = document.getElementById("connect");
let changePhotoCarousel = document.getElementById("changePhotoCarouel")

//appear username connected's name 
if(user != null){
    connect.innerHTML = `   
    <div>
        <div id="user">
            Bonjour ${user} 
            <img id="iconMenu" src="images/icon-arrow-menu.png" alt="icone menu déroulant"> 
        </div>
        <button id="disconnect">Se déconnecter</button>
    </div>`

}

//appear btn disconnected 
let iconMenu = document.getElementById("iconMenu");
let disconnect = document.getElementById("disconnect");
if(iconMenu != null){
    iconMenu.addEventListener("click", function() {
        if(disconnect.style.visibility == "hidden"){
            disconnect.style.visibility = "visible"
        } else {
            disconnect.style.visibility = "hidden"
        }
    })
}

//disconnected
if(disconnect != null){
    disconnect.addEventListener('click', function (event) {
        sessionStorage.clear(user);
        window.location.reload();
        window.location = "index.html";
    })
};
