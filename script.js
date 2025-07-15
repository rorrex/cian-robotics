const botones = document.querySelectorAll(".btn-mas");
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    alert("Pronto tendrás más información sobre este producto.");
  });
});
