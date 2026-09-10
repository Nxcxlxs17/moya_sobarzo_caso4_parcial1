const listaUsuarios = [
    {   
        id: 1,
        nombre: "Nicolas Perez",
        username: "nico@duoc.cl", 
        password: "nico1234",
        telefono: "917111111",
        techDevice: [{device: "Smartwatch", serial: "PRODUCT11111"}],
    },
    
    {   
        id: 2,
        nombre: "Juan Lopez",
        username: "juan@duoc.cl",
        password: "aa123",
        telefono: "913131313",
        techDevice: [{device: "Banda Deportiva", serial: "PRODUCT11222"}],

        
    },
    {
        id: 3,
        nombre: "Felipe Moya",
        username: "felipe@duoc.cl", 
        password: "moya67",
        telefono: "914141414",
        techDevice: [{device: "Ciclocomputador", serial: "PRODUCT11333"}],
    }
]



const formLogin = document.getElementById("cuerpo-login");

if (formLogin){
    formLogin.addEventListener("submit", function(event){
        event.preventDefault();
 

        const inputUser = document.getElementById("username").value;
        const inputPass = document.getElementById("password").value;

        const usuarioEncontrado = listaUsuarios.find(function(user){
        return user.username === inputUser && user.password === inputPass;
        });

        if(usuarioEncontrado){
            console.log("Inicio de Sesion exitosa");
            console.log("ID del usuario registrado:", usuarioEncontrado.id);
            alert("Bienvenido a TECNOFIT, " + usuarioEncontrado.username);
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


const formRegistro = document.querySelector(".cuerpo-login");

if(formRegistro && !formLogin) {
    formRegistro.addEventListener("submit", function(event){
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const username = document.getElementById("username").value.trim().toLowerCase();
        const mailConfirmation = document.getElementById("mail-confirmation").value.trim().toLowerCase();
        const password = document.getElementById("password").value;
        const passwordConfirmation = document.getElementById("password-confirmation").value;
        const phone = document.getElementById("phone").value.trim();
        const techDevice = document.getElementById("device").value.trim();
        const serialNumb = document.getElementById("serial").value.trim();



        let errores = [];

        if(nombre === "") {
            errores.push("El nombre completo no puede estar vacío.");
        } else if (nombre.length > 80) {
            errores.push("El nombre no puede superar los 80 caracteres");
        }

        if(username === ""){
            errores.push("El correo electrónico no puede estar vacío")
        } else if (!username.endsWith("@duoc.cl")){
            errores.push("El correo debe terminar en @duoc.cl o @profesor.duoc.cl");
        } else if (!username.endsWith("@profesor.duoc.cl")){
            errores.push("El correo debe terminar en @profesor.duoc.cl")
        } else if (username.length > 60) {
            errores.push("El correo no puede tener más de 60 caracteres.")
        } else {
            const existeCorreo = listaUsuarios.some(function(user){
                return user.username === username;
            });
            if(existeCorreo){
                errores.push("Este correo ya se encuentra regitrado en el sistema.")
            }
        }

        if(username !== mailConfirmation){
            errores.push("La confirmacion del correo no coincide")
        }

        let mayusculas = 0;
        let tieneMinuscula = false;
        let tieneNumero = false;
        let tieneEspecial = false;

        const caracteresEspeciales = "@#$%&+=!._*";
        const numeros = "0123456789";

        for (let i = 0; i < password.length; i++) {
            let char = password[i];

            if (char >= 'A' && char <= 'Z'){
                mayusculas++;
            } else if (char >= 'a' && char <= 'z'){
                tieneMinuscula = true;
            } else if (numeros.includes(char)){
                tieneNumero = true;
            } else if (caracteresEspeciales.includes(char)) {
                tieneEspecial = true;
            }
        }    
            if (password.length < 8){
                errores.push("La contraseña debe tener un minimo de 8 caracteres.");
            }

            if (!mayusculas){
                errores.push("La contraseña debe incluir al menos una letras MAYÚSCULA.");
            }

            if(!tieneMinuscula){
                errores.push("La contraseña debe incluir al menos una letra minúscula.");
            }

            if(!tieneNumero){
                errores.push("La contraseña debe incluir al menos un número.");
            }

            if(!tieneEspecial){
                errores.push("La contraseña debe incluir al menos un caracter especial.");
            }

            if(password !== passwordConfirmation){
                errores.push("La contraseña y su confirmación no coinciden.");
            }

            if(phone !== ""){
                if(phone.length < 9 || phone.length > 9){
                    errores.push("El teléfono debe tener exactamente 9 digitos.");
                }
            }

            

            if(errores.length > 0){
                alert("Por favor corrige los siguientes errores: \n\n- " + errores.join("\n- "));
            } else {
                const nuevoUsuario = {
                    id: listaUsuarios.length + 1,
                    nombre: nombre,
                    username: username,
                    password: password,
                    telefono: phone || "No especificado",
                    generos: generosSeleccionados
                };
                
                listaUsuarios.push(nuevoUsuario);

                console.log("Usuario registrado con exito.");
                console.log("Lista actualizada: ", listaUsuarios);

                alert("Registro exitoso Usuario guardado.");
                window.location.href = "login.html";
            }
    })
}