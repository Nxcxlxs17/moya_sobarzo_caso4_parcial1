const listaUsuarios = [
    {   
        username: "nico@profesor.duoc.cl", 
        password: "Nico123!",
    },
    
    {   
        username: "juan@duoc.cl",
        password: "Aaaaa12!",   
    },
    {
        username: "felipe@duoc.cl", 
        password: "Moyaaa6!",
        }
]

let dispositivosTemporales =[];

// BOTON REGISTRO
const formLoginb = document.getElementById("btnRegisterUser");
if(formLoginb){
    formLoginb.addEventListener("click", function(event){
        window.location.href="registro.html"
    });
}

//BOTÓN DEL LOGIN

const formLogin = document.getElementById("cuerpo-login");

if (formLogin){
    formLogin.addEventListener("submit", function(event){
        event.preventDefault();
 

        const inputUser = document.getElementById("username").value;
        const inputPass = document.getElementById("password").value;

        const usuarioEncontrado = listaUsuarios.find(function(user){
        return user.username === inputUser && user.password === inputPass;
        });

        if(inputUser.trim() === "" || inputPass.trim() === ""){
            alert("Debe ingresar un correo y una contraseña.");
        } else if(usuarioEncontrado){
            console.log("Inicio de Sesion exitosa");
            console.log("ID del usuario registrado:", usuarioEncontrado.id);
            alert("Bienvenido a TECNOFIT, " + usuarioEncontrado.username);
            window.location.href = "home.html";
        } else {
            console.log("Datos ingresados incorrectos.");
            alert("Usuario o contraseña incorrectos.");
        }
        });   
}   



//BOTÓN DEL REGISTRO DE DISPOSITIVO

const btnSubmitDevice = document.getElementById("btnSubmitDevice");

if (btnSubmitDevice) {
    btnSubmitDevice.addEventListener("click", function(event) {
        event.preventDefault();

        const inputDevice = document.getElementById("device").value.trim();
        const inputSerial = document.getElementById("serial").value.trim();

        const tiposValidos = ["Smartwatch", "Banda Deportiva", "Ciclocomputador", "Audífonos"];
        const regexSerial = /^[a-zA-Z0-9]{12}$/;

        let erroresDis = [];

        if (!tiposValidos.includes(inputDevice)) {
            erroresDis.push("Tipo de dispositivo no válido. Debe ser: Smartwatch, Banda Deportiva, Ciclocomputador o Audífonos.");
        }

        if (!regexSerial.test(inputSerial)) {
            erroresDis.push("El número de serie debe tener exactamente 12 caracteres alfanuméricos.");
        }


        if(erroresDis.length > 0){
                alert("Por favor corrige los siguientes errores: \n\n- " + erroresDis.join("\n- "));
            } else {
        // Guardar en el arreglo temporal
        const nuevoDispositivo = {
            device: inputDevice,
            serial: inputSerial
        };

        dispositivosTemporales.push({
            nuevoDispositivo
        });

        console.log("Dispositivo registrado con exito.", nuevoDispositivo);


        // Limpiar los campos para ingresar otro
        document.getElementById("device").value = "";
        document.getElementById("serial").value = "";

        alert("Registro exitoso del dispositivo.");
    }
    })
    
}


//BOTÓN DEL REGISTRO DE USUARIO
const formRegistro = document.querySelector(".cuerpo-login");

if(formRegistro && !formLogin) {
    formRegistro.addEventListener("submit", function(event){
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const username = document.getElementById("username").value.trim().toLowerCase();
        const password = document.getElementById("password").value;
        const passwordConfirmation = document.getElementById("password-confirmation").value;
        const phone = document.getElementById("phone").value.trim();
        
        let errores = [];

        if(nombre === "") {
            errores.push("El nombre completo no puede estar vacío.");
        } else if (nombre.length > 80) {
            errores.push("El nombre no puede superar los 80 caracteres");
        }

        if(username === ""){
            errores.push("El correo electrónico no puede estar vacío")
        } else if (!username.endsWith("@duoc.cl") && !username.endsWith("@profesor.duoc.cl")){
            errores.push("El correo debe terminar en @duoc.cl o @profesor.duoc.cl");
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

            
            // Validar Dispositivos: Si no presionó "Registrar dispositivo", toma lo que escribió actualmente
            const inputDevice = document.getElementById("device").value.trim();
            const inputSerial = document.getElementById("serial").value.trim();

            if (dispositivosTemporales.length === 0) {
                const tiposValidos = ["Smartwatch", "Banda Deportiva", "Ciclocomputador", "Audífonos"];
                const regexSerial = /^[a-zA-Z0-9]{12}$/;

                if (tiposValidos.includes(inputDevice) && regexSerial.test(inputSerial)) {
                    dispositivosTemporales.push({
                        device: inputDevice,
                        serial: inputSerial
                    });
                } else {
                    errores.push("Debe registrar al menos un dispositivo válido.");
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
                    techDevice: dispositivosTemporales
                };
                
                listaUsuarios.push(nuevoUsuario);

                console.log("Usuario registrado con exito.", nuevoUsuario);
                console.log("Lista actualizada: ", listaUsuarios);

                alert("Usuario registrado con éxito.");
                window.location.href = "login.html";
            }
    })
}