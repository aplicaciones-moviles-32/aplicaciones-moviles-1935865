var feedArray = ["images/chihuahua.jpg", "images/cheems.jpg", "images/pedillos.jpg",
    "images/chihuahua.jpg", "images/cheems.jpg", "images/pedillos.jpg",
    "images/chihuahua.jpg", "images/cheems.jpg", "images/pedillos.jpg",
    "images/chihuahua.jpg", "images/cheems.jpg", "images/pedillos.jpg"];

var imagencontainer = document.getElementById("contenedorimg");
var iniciocontainer = document.getElementById("mainpage");


function showpic(contenedor, size) {

    for (var i = 0; i < feedArray.length; i++) {
        var ioncol = document.createElement("ion-col");
        var imagen = document.createElement("img");
        ioncol.size = size;
        imagen.src = feedArray[i];
        ioncol.appendChild(imagen);
        contenedor.appendChild(ioncol);
    }

}
showpic(imagencontainer, "4");

var user = {
    "name": "Cheems", 
    "correo": " cheems@gmail.com ", 
    "username": "@thealmostrealcheems", 
    "password": "fakepassword", 
    "pfp": "images/cheems.jpg", 
    "fechadenacimiento": "420 A.C", 
    "followers": "420" , 
    "following": "69",
    "desc":"Da real g of g's",
    "images": feedArray.length
};

var feed = [
    {
        "user":"@pedillos",
        "imagen":"images/pedillos.jpg",
        "description":"Mi primera foto",
        "idpub":"1000"
    },
    {
        "user":"@cheems",
        "imagen":"images/cheems.jpg",
        "description":"#amsiedad",
        "idpub":"6969"
    },
    {
        "user":"@chihuahua",
        "imagen":"images/chihuahua.jpg",
        "description":"I'm just a Chihuahua",
        "idpub":"2050"
    },
    {
        "user":"@pedillos",
        "imagen":"images/pedillos.jpg",
        "description":"Por que le hablaste a tu ex otra vez?",
        "idpub":"0380"
    },
    {
        "user":"@pedillos",
        "imagen":"images/pedillos.jpg",
        "description":"Despues de dejar 7 materias en la FCFM",
        "idpub":"1111"
    },
    {
        "user":"@cheems",
        "imagen":"images/cheems.jpg",
        "description":"Ya no quiero hacer este parcial",
        "idpub":"9999"
    },
];

for (var i=0; i<feed.length;i++){
    var card= document.createElement("ion-card");
    var cheader= document.createElement("ion-card-header");
    var csubtitle= document.createElement("ion-card-subtitle");
    var ctitle= document.createElement("ion-card-title");
    var containerimg = document.createElement("p");
    var img= document.createElement("img");
    var ccontent= document.createElement("ion-card-content");

    csubtitle.innerHTML = feed[i].idpub;
    ctitle.innerHTML = "<img src=\""+feed[i].imagen+"\" width=\"50px\">"+"<strong>"+feed[i].user+"</strong>";
    img.src=feed[i].imagen;
    img.id="imgfeed";
    ccontent.innerText = feed[i].description;


    containerimg.appendChild(img);
    ctitle.appendChild(containerimg);
    cheader.appendChild(csubtitle);
    cheader.appendChild(ctitle);
    card.appendChild(cheader);
    card.appendChild(ccontent);
    iniciocontainer.appendChild(card);
}

var username = document.getElementById("username");
var profpic = document.getElementById("pfp");
var seguidores = document.getElementById("followers");
var seguidos = document.getElementById("following");
var descripcion = document.getElementById("desc");
var publicaciones = document.getElementById("images");

username.innerHTML = "<strong>"+user.username+"</strong>";
profpic.src = user.pfp;
seguidores.innerHTML= "<strong>"+user.followers+"</strong>";
seguidos.innerHTML = "<strong>"+user.following+"</strong>";
descripcion.innerText = user.desc;
publicaciones.innerHTML = "<strong>"+user.images+"</strong>";