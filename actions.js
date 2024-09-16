function cambiarColor() {
  let parrafos = document.querySelectorAll("p");

  for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = "blue";
  }
}
//---------------------------------------------------------
function mostrarValor() {
  let valorTexto = document.getElementById("texto").value;

  alert("El valor ingresado es: " + valorTexto);
}
//---------------------------------------------------------
const listaItems = document.querySelectorAll("#miLista li");

listaItems.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.textContent);
  });
});
//---------------------------------------------------------
const campoTexto = document.getElementById("miCampoTexto");
const deshabilitarBtn = document.getElementById("deshabilitarBtn");
const habilitarBtn = document.getElementById("habilitarBtn");

deshabilitarBtn.addEventListener("click", () => {
  campoTexto.disabled = true;
});

habilitarBtn.addEventListener("click", () => {
  campoTexto.disabled = false;
});
//---------------------------------------------------------
const formulario = document.getElementById("miFormularioEmail");
const emailInput = document.getElementById("email");
const correoContainer = document.getElementById("correoContainer");

function mostrarCorreo() {
  const correo = localStorage.getItem("email");

  if (correo) {
    correoContainer.innerHTML = `
                    <p>Correo guardado: ${correo}</p>
                    <button id="eliminarBtn">Eliminar</button>
               		 `;
    const eliminarBtn = document.getElementById("eliminarBtn");
    eliminarBtn.addEventListener("click", () => {
      localStorage.removeItem("email");
      correoContainer.innerHTML = "";
    });
  }
}

mostrarCorreo();

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailInput.value;
  localStorage.setItem("email", email);
  mostrarCorreo();
});
