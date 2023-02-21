const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const contraseña = document.getElementById("contraseña");
const form = document.getElementById("form");
const btn = document.getElementById("btn");
const parrafo = document.getElementById("warnings")


btn.addEventListener("click", e=> {
    e.preventDefault()
    let warnings = "";
    let entrar = false;
    let validacion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(nombre.value.length<3) {
        warnings += 'El nombre no es valido <br>';
        entrar = true;
    }
    if(apellido.value.length<3) {
        warnings += 'El apellido no es valido <br>';
        entrar = true;
    }
    if (!validacion.test(email.value)){
        warnings += `El email no es valido <br>`;
        entrar = true;
    }
    if(contraseña.value.length < 8 ) {
        warnings += `La contraseña debe tener al menos 8 caracteres <br>`
        entrar = true;
    }

    if(entrar) {
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "enviado";
    }
})