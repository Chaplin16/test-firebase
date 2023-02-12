import { updateUser } from "../service/user.js";

document.querySelector("#save").addEventListener("click", function() {
    let user = JSON.parse(localStorage.getItem("user"));
    updateUser(user.uid, document.querySelector("#firstname").value);

});