let user = JSON.parse(sessionStorage.getItem("username"));
let connect = document.getElementById("connect");

connect.innerHTML = ` <ul>
<a href="connect.html" class="buttonConnect" id="user">Bonjour ${user}</a>
<li>
     <a href="#" id="disconnect">Se déconnecter</a>
</li>
</ul>`
