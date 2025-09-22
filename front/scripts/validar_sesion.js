const d= document;
const $formulario = d.getElementById("formulario_inicioSesion")


d.addEventListener("submit", async e=>{
    
    if(e.target === $formulario){
        e.preventDefault();

        try {
            const usuario = {
            username: $formulario.elements["username-login"].value,
            password: $formulario.elements["password-login"].value,
            };

            const res = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario),
            });

            const data = await res.json(); // leer respuesta JSON

            if (!res.ok) {
            // Error devuelto por el backend
            alert(data.error || "Error al iniciar sesión");
            return;
            }

            // Login exitoso
            alert("¡Inicio de sesión correcto! Bienvenido " + data.username);

            // Opcional: guardar token en localStorage si usas JWT
            // localStorage.setItem("token", data.token);

            $formulario.reset();
            // Aquí podrías redirigir a otra página:
            window.location.href = "http://localhost:5500/front/contactos.html";


        } catch (error) {
            console.error(error);
            alert("Hubo un error al conectar con el servidor");
        }
                
    }
})