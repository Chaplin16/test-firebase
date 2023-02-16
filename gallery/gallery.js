// CHANGE PHOTOS GALLERY
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-storage.js";
import { storage } from "../service/firebase.js";

// CHANGE PHOTO GALLERY
let imgSendGallery = document.getElementById("imgSendGallery");
let gallery = document.getElementById("gallery");

imgSendGallery.addEventListener('click', function(event) {
    const fileNameGalleryInput = document.getElementById('selectImgGallery');
    const fileNameGallery = document.getElementById('selectImgGallery').files[0];
    event.preventDefault();
    function isValidName(e) {
        return (/\.(png|jpeg|jpg|JPG|JPEG|PNG)$/i).test(e);
    };

    if (isValidName(fileNameGallery.name)){
        alert(`votre fichier "${fileNameGallery.name}" est pris en compte`)
        fileNameGalleryInput.value="";
        //upload files in storage
        const storage = getStorage();
        const storageRef = ref(storage);
        const filesRef = ref(storageRef, `gallery`);
        const img = `${fileNameGallery.name}`;
        const imagesGalleryRef = ref(filesRef, img);
        imagesGalleryRef.fullPath; //permet de connaître le chemin du dossier et de l image enregistrée

        uploadBytes(imagesGalleryRef, img).then((snapshot) => {
            console.log('Images enregistrées dans le cloud store');
        });

        //return files in application
        const pathImgGallery = `gallery/${img}`;
        const pathReference = ref(storage, pathImgGallery);
        getDownloadURL(pathReference)
        .then((url) => {
            gallery.setAttribute('src', url);
            alert("Votre image a été insérée dans le carousel photo👍")
          })
          .catch((error) => {
            // Handle any errors
          });

    }else{
        alert(`Votre fichier image "${fileNameGallery.name}" doit être au format .jpg, .jpeg ou .png`);  
    }

    
})  

