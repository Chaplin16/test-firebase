let user = JSON.parse(sessionStorage.getItem("username"));
let connect = document.getElementById("connect");

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
        
// CHANGE PHOTO CAROUSEL
    let changePhotoCarousel = document.getElementById("changePhotoCarousel");
    let imgSendCarousel = document.getElementById("imgSendCarousel");
    changePhotoCarousel.style.visibility = "visible";

    imgSendCarousel.addEventListener('click', function(event) {
        const fileName = document.getElementById('selectImgCarousel').files[0];
        event.preventDefault();
        function isValidName(e) {
            return !(/\.(png|jpeg|jpg|JPG|JPEG|PNG)$/i).test(e);
        };
        if (!isValidName(fileName) == true){
            alert("Votre fichier image doit être au format .jpg, .jpeg ou .png")
            return false
        }
        alert(`votre fichier "${fileName.name}" est pris en compte`);
        fileName.name = " "
    });

// CHANGE PHOTO GALLERY
    let changePhotoGallery = document.getElementById("changePhotoGallery");
    let imgSendGallery = document.getElementById("imgSendGallery");
    changePhotoGallery.style.visibility = "visible";

    imgSendGallery.addEventListener('click', function(event) {
        const fileNameGallery = document.getElementById('selectImgGallery').files[0];
        event.preventDefault();
        function isValidName(e) {
            return !(/\.(png|jpeg|jpg|JPG|JPEG|PNG)$/i).test(e);
        };
    
        if (!isValidName(fileNameGallery) == true){
            alert("Votre fichier image doit être au format .jpg, .jpeg ou .png")
            return false
        }
        alert(`votre fichier "${fileNameGallery.name}" est pris en compte`)

        fileNameGallery.name="";
    })  
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

//disconnected user
if(disconnect != null){
    disconnect.addEventListener('click', function (event) {
        sessionStorage.clear(user);
        window.location.reload();
        window.location = "index.html";
    })
};
