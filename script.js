var database = [
    {
        username: "ricardo",
        password: "hola",
    },
    {
        username: "sally",
        password: "123",
    },
    {
        username: "ingrid",
        password: "777",
    }
];

var newsFeed = [
    {
        username: "Sebastian",
        timeline: "So tired from all that learning"
    },
    {
        username: "Andres",
        timeline: "Javascript is so cool",
    },
    {
        username: "Mitch",
        timeline: "Javascript is so cool",
    }
];

function isUserValid(username, password){
    for (var i=0; i < database.length; i++) {
        if(database[i].username === username &&
            database[i].password === password) {
            return true;
        }
    }
    return false;
    
}

function signIn(username, password){
    if  (isUserValid(username,password)) {
        console.log(newsFeed);

    } else {
        alert("Nombre de usuario y contraseña incorrecto");
    }
}
var userNamePrompt = prompt("¿Cuál es tu nombre de usuario?");
var passwordPrompt = prompt("¿Cuál es tu contraseña?");

signIn(userNamePrompt, passwordPrompt);