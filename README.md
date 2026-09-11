Software para registro y login de TECNOFIT


La tienda TecnoFit ha detectado que muchos usuarios abandonan la creación de sus cuentas debido a un proceso confuso al intentar registrar sus dispositivos actuales. 
Además, los usuarios suelen errar al ingresar las metas de entrenamiento diarias, introduciendo letras o números irreales. 
La empresa requería un formulario dinámico que permitiese agregar múltiples dispositivos vinculados durante el registro de la cuenta de usuario. Este proyecto existe para
darle forma a dicho registro y al login de la tienda, aunque posee limitaciones al no tener una base de datos.


La página del login tiene un botón de inicio de sesión y otro para ir a la ventana de registro de usuario. Al no haber una base de datos, el login funciona con el username y el password de las siguientes cuentas pre registradas en un array:


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

Al iniciar sesión será dirigido al home de la página, el cual no está terminado. 

En la ventana de registro de usuario, una vez completado el registro de al menos un dispositivo (realizado con el botón de registrar dispositivo) y de los datos del usuario (con el botón de registrar usuario), será dirigido a la página del login.

Aquí hay algunos ejemplos de datos válidos que se pueden ingresar en el registro:

    {   
        id: 1,
        nombre: "Nicolas Perez",
        username: "nic@profesor.duoc.cl", 
        password: "Nicc123!",
        telefono: "917111111",
        techDevice: [{device: "Smartwatch", serial: "PRODUCT11111"}],
    },
    
    {   
        id: 2,
        nombre: "Jaime Lopez",
        username: "jaime@duoc.cl",
        password: "Aa12345!",
        telefono: "913131313",
        techDevice: [{device: "Banda Deportiva", serial: "PRODUCT11222"}],

        
    },
    {
        id: 3,
        nombre: "Felipe Moya",
        username: "feli@duoc.cl", 
        password: "Moya676!",
        telefono: "914141414",
        techDevice: [{device: "Ciclocomputador", serial: "PRODUCT11333"}],
    }



Tanto la página del login como la del registro poseen una serie de condiciones en los campos a completar que son informadas oportunamente al usuario en caso de cometer algún error. 
