const btnAbrir = document.getElementById("btnAbrir");
    const btnCerrar = document.getElementById("btnCerrar");
    const overlay = document.getElementById("overlay");

    btnAbrir.addEventListener("click", () => {
      overlay.classList.add("active");
    });

    btnCerrar.addEventListener("click", () => {
      overlay.classList.remove("active");
    });

    // Extra: cerrar si se hace clic fuera del formulario
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
    });

