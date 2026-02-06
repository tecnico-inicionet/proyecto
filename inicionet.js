// prueba
// tabla_prueba
// id
// texto

function guardarTexto() {
  const texto = document.getElementById("texto").value;

  fetch("http://localhost:3000/guardar-texto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ texto }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Texto guardado:", data);
      alert("Texto guardado correctamente");
    })
    .catch((err) => {
      console.error(err);
      alert("Error al guardar el texto");
    });
}
