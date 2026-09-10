const listaUsuarios = [
    {   
        id: 1,
        nombre: "Nicolas Perez",
        username: "nico@duoc.cl", 
        password: "nico1234",
        telefono: "917111111",
        generos: ["FICCION", "TERROR"]
    },
    
    {   
        id: 2,
        nombre: "Juan Lopez",
        username: "juan@duoc.cl",
        password: "aa123",
        telefono: "913131313",
        generos: ["MISTERIO"]
        
    },
    {
        id: 3,
        nombre: "Felipe Moya",
        username: "felipe@duoc.cl", 
        password: "moya67",
        telefono: "",
        generos: ["SUSPENSO", "HISTORIA"]
    }
]



const formLogin = document.getElementById("cuerpo-login");

if (formLogin){
    formLogin.addEventListener("submit", function(event){

 

    const inputUser = document.getElementById("username").value;
    const inputPass = document.getElementById("password").value;

    const usuarioEncontrado = listaUsuarios.find(function(user){
    return user.username === inputUser && user.password === inputPass;
    });

    if(usuarioEncontrado){
        console.log("Inicio de Sesion exitosa");
        console.log("ID del usuario registrado:", usuarioEncontrado.id);
        alert("Bienvenido a GameZone, " + usuarioEncontrado.username);
        window.location.href = "home.html"
    } else {
        console.log("Datos ingresados incorrectos.")
        alert("Usuario o contraseña incorrectos");
    }
    });   
}   


const btnRegisterUser = document.getElementById("btnRegisterUser")
if(btnRegisterUser){
    btnRegisterUser.addEventListener("click", function(event){
        
        window.location.href = "registro.html";
    
    });
}