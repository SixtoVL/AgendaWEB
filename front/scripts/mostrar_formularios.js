const btnLogin = document.getElementById("bt_login");
const btnSignin = document.getElementById("bt_signin");
const formLogin = document.getElementById("form_login");
const formSignin = document.getElementById("form_signin");


function ocultarFormularios(){
    formLogin.classList.remove("activo");
    formSignin.classList.remove("activo");
}

// Toggle 
btnLogin.addEventListener("click", () => {
  if (!formLogin.classList.contains("activo")) ocultarFormularios();

  formLogin.classList.toggle("activo"); // Alterna el formulario actual
});


btnSignin.addEventListener("click", () => {
  if (!formSignin.classList.contains("activo")) ocultarFormularios();
  
  formSignin.classList.toggle("activo"); // Alterna el formulario actual
});
