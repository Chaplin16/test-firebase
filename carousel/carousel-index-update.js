// CHANGE PHOTOS CAROUSEL
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-storage.js";
import { storage } from "../service/firebase.js";
let imgSendCarousel = document.getElementById("imgSendCarousel");
let carousel = document.getElementById("carousel");

imgSendCarousel.addEventListener('click', function(event) {
    const fileNameInput = document.getElementById('selectImgCarousel')
    const fileName = document.getElementById('selectImgCarousel').files[0];
    event.preventDefault();
    function isValidName(e) {
        return (/\.(png|jpeg|jpg|JPG|JPEG|PNG)$/i).test(e);
    };
    if (isValidName(fileName.name)){
        alert(`votre fichier "${fileName.name}" est pris en compte`)
        fileNameInput.value = "";
        //upload files in storage
        const storage = getStorage();
        const storageRef = ref(storage);
        const filesRef = ref(storageRef, `carousel`);
        const img = `${fileName.name}`;
        const imagesCarouselRef = ref(filesRef, img);
        imagesCarouselRef.fullPath; //permet de connaître le chemin du dossier et de l image enregistrée

        uploadBytes(imagesCarouselRef, img).then((snapshot) => {
            console.log('Images enregistrées dans le cloud store');
        });
        
        //return files in application
        const pathImgCarousel = `carousel/${img}`;
        const pathReference = ref(storage, pathImgCarousel);
        getDownloadURL(pathReference)
        .then((url) => {
            // `url` is the download URL for 'images/stars.jpg'
        
            // This can be downloaded directly:
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {
              const blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();
        
            // Or inserted into an <img> element
            carousel.setAttribute('src', url);
          })
          .catch((error) => {
            // Handle any errors
          });

    }else{
        alert(`Votre fichier image "${fileName.name}" doit être au format .jpg, .jpeg ou .png`);  
    } 
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