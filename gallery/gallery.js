// CHANGE PHOTOS GALLERY
import { getStorage, ref, uploadString, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-storage.js";
import { storage } from "../service/firebase.js";

// CHANGE PHOTO GALLERY
let imgSendGallery = document.getElementById("imgSendGallery");
let gallery = document.getElementById("gallery");

imgSendGallery.addEventListener('click', async function(event) {
    const fileNameGalleryInput = document.getElementById('selectImgGallery');
    const fileNameGallery = document.getElementById('selectImgGallery').files[0];
    event.preventDefault();
    function isValidName(e) {
        return (/\.(png|jpeg|jpg|JPG|JPEG|PNG)$/i).test(e);
    };

    if (isValidName(fileNameGallery.name)){
        alert(`votre fichier "${fileNameGallery.name}" est pris en compte`)
        fileNameGalleryInput.value="";
        // img in base64

        const toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
        
        async function convertImg() {
           const file = fileNameGallery
           return await toBase64(file);
        }
        
        const imgConvert = await convertImg();

        //upload files in storage
        const storage = getStorage();
        const storageRef = ref(storage);
        const filesRef = ref(storageRef, `gallery`);
        const img = `${fileNameGallery.name}`;
        
        const imagesGalleryRef = ref(filesRef, img);
        imagesGalleryRef.fullPath; //permet de connaître le chemin du dossier et de l image enregistrée

        await uploadString(imagesGalleryRef, imgConvert, 'data_url') 

        //return files in application
        const pathImgGallery = 'gallery' + '/' + `${imgConvert}`;
        const pathReference = ref(storage, pathImgGallery);
        //const downloadURL= await getDownloadURL(pathReference)
        const newImg = document.createElement("img");
        newImg.src = pathReference;


        gallery.appendChild(newImg);
        alert(`Votre image ${newImg} a été insérée dans la gallerie photo👍`)
          
       

    }else{
        alert(`Votre fichier image "${fileNameGallery.name}" doit être au format .jpg, .jpeg ou .png`);  
    }

    
})  

