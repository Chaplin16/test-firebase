//display btn on the top of pages
let connect = document.getElementById("connect");
let linkTop = document.getElementById("linkTop");
let linkTop1 = document.getElementById("linkTop1");

function displayBtnConnect() {
    linkTop.style.display = "none";
    linkTop1.style.display = "none";
    connect.innerHTML += ` 
            <ul>
               <a href="connect.html" class="buttonConnect" id="user">AURORE</a>
               <li>
                    <a href="#" id="disconnect">Se déconnecter</a>
               </li>
            </ul>`

}