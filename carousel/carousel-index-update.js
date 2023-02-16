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
            carousel.setAttribute('src', url);
            alert("Votre image a été insérée dans le carousel photo👍")
          })
          .catch((error) => {
            // Handle any errors
          });

    }else{
        alert(`Votre fichier image "${fileName.name}" doit être au format .jpg, .jpeg ou .png`);  
    } 
});


