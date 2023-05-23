//Mover los resultados del summary

const continueButton = document.getElementById("continue-button");

function variadoSummary() {
  const reactionCambios = Math.floor(Math.random() * 100);
  const memoryCambios = Math.floor(Math.random() * 100);
  const verbalCambios = Math.floor(Math.random() * 100);
  const visualCambios = Math.floor(Math.random() * 100);

  const reactionStatus = document.querySelector(".reaction-status");
  const memoryStatus = document.querySelector(".memory-status");
  const verbalStatus = document.querySelector(".verbal-status");
  const visualStatus = document.querySelector(".visual-status");

  reactionStatus.innerHTML = `<p><span class="bold">${reactionCambios}</span> / 100</p>`;
  memoryStatus.innerHTML = `<p><span class="bold">${memoryCambios}</span> / 100</p>`;
  verbalStatus.innerHTML = `<p><span class="bold">${verbalCambios}</span> / 100</p>`;
  visualStatus.innerHTML = `<p><span class="bold">${visualCambios}</span> / 100</p>`;
}

continueButton.addEventListener("click", () => {
  variadoSummary();
});






//Mover el resultado del result

// Cree mis variables

const numbersValor = document.querySelector(".numbers span:first-child"); //Para cambiar el resultado

const resultComponent = document.querySelector(".result-component"); //Estas dependiendo del resultado
const statusElement = document.querySelector(".status");
const numbersContainer = document.querySelector(".numbers");
const paragraph = document.querySelector(".result-paragraph");



//Empece mi funcion

function actualizarPromedio() {
  //Primero empece haciendo la suma de los valores del Summary
  const reactionCambios = parseInt(document.querySelector(".reaction-status span").textContent);
  const memoryCambios = parseInt(document.querySelector(".memory-status span").textContent);
  const verbalCambios = parseInt(document.querySelector(".verbal-status span").textContent);
  const visualCambios = parseInt(document.querySelector(".visual-status span").textContent);

  const sum = reactionCambios + memoryCambios + verbalCambios + visualCambios;
  const promedio = Math.round(sum / 4);

  //hice que mi variable de numbersValor atrajera con el textContent para obtener el contenido de HTML y sea igual al resultado que de el promedio
  numbersValor.textContent = promedio;



  //Empece usando el if con el else if para dividir mis resultados y tengan una funcion diferente en cada uno
  if (promedio >= 75 && promedio <= 100) 
  {
    resultComponent.classList.remove("yellow", "red"); //Para activar y desactivar los colores
    resultComponent.classList.add("green");

    statusElement.textContent = "Great 😆"; //para cambiar la frase
    paragraph.textContent = "You scored higher than 65% of the people who have taken these tests";

    numbersContainer.classList.remove("yellow", "red"); //Cambia el color del contenedor numbers dependiendo del porcentaje
    numbersContainer.classList.add("green");

    continueButton.classList.remove("yellow", "red");
    continueButton.classList.add("green");
  } 

  
  else if (promedio >= 43 && promedio < 75) {
    resultComponent.classList.remove("green", "red");
    resultComponent.classList.add("yellow");

    statusElement.textContent = "Normal 😐";
    paragraph.textContent = "You scored similar to most people who have taken these tests";

    numbersContainer.classList.remove("green", "red");
    numbersContainer.classList.add("yellow");
  } 


  else if (promedio >= 0 && promedio < 43) {
    resultComponent.classList.remove("green", "yellow");
    resultComponent.classList.add("red");

    statusElement.textContent = "Bad 💀";
    paragraph.textContent = "You scored lower than most people who have taken these tests";

    numbersContainer.classList.remove("green", "yellow");
    numbersContainer.classList.add("red");
  }
}

continueButton.addEventListener("click", () => {
  variadoSummary();
  actualizarPromedio();
});


