// script.js

const flipButton = document.getElementById("flipButton");
const selectChoice = document.getElementById("choice");
const coin = document.getElementById("coin");
const resultMessage = document.getElementById("resultMessage");

// Habilitar el botón cuando se selecciona una opción
selectChoice.addEventListener("change", function () {
  flipButton.disabled = selectChoice.value === ""; // Desactiva el botón si "Elige una" está seleccionado
});

// Función para hacer girar la moneda
function flipCoin() {
  // Deshabilitar el botón mientras gira la moneda
  flipButton.disabled = true;

  // Reiniciar la rotación de la moneda
  coin.style.transition = "none"; // Detenemos cualquier transición activa
  coin.style.transform = "rotateY(0deg)"; // Reiniciamos la rotación

  // Aseguramos que el reinicio ocurra antes de aplicar el nuevo giro
  setTimeout(() => {
    const randomResult = Math.random() < 0.5 ? "cara" : "cruz";

    // Iniciar la animación de giro con una transición suave
    coin.style.transition = "transform 2s ease-out";
    const finalRotation = randomResult === "cara" ? 3600 : 3780; // 3600 grados para "cara", 3780 para "cruz"
    coin.style.transform = `rotateY(${finalRotation}deg)`;

    // Después de 2 segundos (duración del giro), mostrar el resultado
    setTimeout(() => {
      if (randomResult === selectChoice.value) {
        resultMessage.textContent = "¡Has ganado!";
        resultMessage.style.color = "#33FF66";
      } else {
        resultMessage.textContent = "Has perdido...";
        resultMessage.style.color = "red";
      }

      // Habilitar el botón nuevamente para otro giro
      flipButton.disabled = false;
    }, 2000); // Tiempo de la animación
  }, 100); // Pequeño retraso para resetear correctamente la animación
}

// Escuchar el evento de clic en el botón de girar
flipButton.addEventListener("click", flipCoin);
