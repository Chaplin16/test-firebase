// CHANGE PHOTOS CAROUSEL

let imgSendCarousel = document.getElementById("imgSendCarousel");

imgSendCarousel.addEventListener('click', function(event) {
    const fileNameInput = document.getElementById('selectImgCarousel')
    const fileName = document.getElementById('selectImgCarousel').files[0];
    event.preventDefault();
    function isValidName(e) {
        return (/\.(png|jpeg|jpg|JPG|JPEG|PNG)$/i).test(e);
    };
    if (isValidName(fileName.name)){
        alert(`votre fichier "${fileName.name}" est pris en compte`)
        
    }else{
        alert(`Votre fichier image "${fileName.name}" doit être au format .jpg, .jpeg ou .png`);  
    }
    fileNameInput.value = " "
});


// CHANGE PHOTO GALLERY
let imgSendGallery = document.getElementById("imgSendGallery");

imgSendGallery.addEventListener('click', function(event) {
    const fileNameGalleryInput = document.getElementById('selectImgGallery');
    const fileNameGallery = document.getElementById('selectImgGallery').files[0];
    event.preventDefault();
    function isValidName(e) {
        return (/\.(png|jpeg|jpg|JPG|JPEG|PNG)$/i).test(e);
    };

    if (isValidName(fileNameGallery.name)){
        alert(`votre fichier "${fileNameGallery.name}" est pris en compte`)
        
    }else{
        alert(`Votre fichier image "${fileNameGallery.name}" doit être au format .jpg, .jpeg ou .png`);  
    }

    fileNameGalleryInput.value="";
    
})  