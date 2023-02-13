import { getOneUser, updateUser } from "../service/user.js";

document.querySelector("#save").addEventListener("click", async function() {
    let user = JSON.parse(localStorage.getItem("user"));
    let firstName = await updateUser(user.uid, document.querySelector("#displayName").value);

    firstName = user.displayName; 

});
