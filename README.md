# 00073523_Repositorio_labo7
Harold Arturo Escobar López 00073523 seccion 1

##  Pruebas en Postman

1 Inicio de sesión – Generación de Token
 Archivo: `1.png`

Ruta: 'POST http://localhost:5000/signin'
Body (JSON)
  json
  {
    "email": "test@example.com",
    "password": "123456"
  }
  
2 Inicio de sesión

  Archivo: `2.png`

1. ¿Cuál es la diferencia entre autenticación y autorización?

Autenticación:
Es el proceso de verificar la identidad del usuario, asegurando que quien intenta acceder sea quien dice ser.
Por ejemplo, al iniciar sesión con un correo y contraseña válidos.

Autorización:
Ocurre después de la autenticación, y determina qué recursos o acciones tiene permitido realizar ese usuario.
Por ejemplo, un usuario autenticado puede ver su perfil, pero solo un administrador puede eliminar otros usuarios. 

2. ¿Cuál es la función del token JWT en la guía?

El JWT (JSON Web Token) sirve para mantener la sesión activa de manera segura entre el cliente y el servidor, sin necesidad de guardar información del usuario en el servidor.

Cuando el usuario inicia sesión correctamente, el servidor genera un token único que contiene datos cifrados (como su ID o correo).

El cliente guarda este token (por ejemplo, en localStorage).

En las siguientes peticiones, el cliente envía el token en el encabezado Authorization.

El servidor verifica la validez del token antes de permitir el acceso a rutas protegidas
