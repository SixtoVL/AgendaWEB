const d=document;
const $form = d.querySelector("#form_signin form");

$form.addEventListener("submit", async (e) => {
  e.preventDefault();
  e.stopPropagation();

  const password = $form.elements["password-signin"].value;
  const confirmPassword = $form.elements["confirm_password"].value;

  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden");
    return;
  }

  const usuario = {
    username: $form.elements["username-signin"].value,
    email: $form.elements["email"].value,
    password: password,
  };

  try {
    const res = await fetch("http://localhost:3000/api/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    alert("Usuario registrado correctamente");
    $form.reset();
  } catch (error) {
    console.error(error);
    alert("Hubo un error al registrar el usuario");
  }
});
