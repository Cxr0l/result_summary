//Mover los resultados del summary

const continueButton = document.getElementById('continue-button');

function variadoSummary() {
  const reactionCambios = Math.floor(Math.random() * 100);
  const memoryCambios = Math.floor(Math.random() * 100);
  const verbalCambios = Math.floor(Math.random() * 100);
  const visualCambios = Math.floor(Math.random() * 100);

  const reactionStatus = document.querySelector('.reaction-status');
  const memoryStatus = document.querySelector('.memory-status');
  const verbalStatus = document.querySelector('.verbal-status');
  const visualStatus = document.querySelector('.visual-status');

  reactionStatus.innerHTML = `<p><span class="bold">${reactionCambios}</span> / 100</p>`;
  memoryStatus.innerHTML = `<p><span class="bold">${memoryCambios}</span> / 100</p>`;
  verbalStatus.innerHTML = `<p><span class="bold">${verbalCambios}</span> / 100</p>`;
  visualStatus.innerHTML = `<p><span class="bold">${visualCambios}</span> / 100</p>`;
}

continueButton.addEventListener('click', () => {
  variadoSummary();
});



//Mover el resultado del result

const numbersValor = document.querySelector('.numbers span:first-child');


function actualizarPromedio() {

  const reactionCambios = parseInt(document.querySelector('.reaction-status span').textContent);
  const memoryCambios = parseInt(document.querySelector('.memory-status span').textContent);
  const verbalCambios = parseInt(document.querySelector('.verbal-status span').textContent);
  const visualCambios = parseInt(document.querySelector('.visual-status span').textContent);

  
  const sum = reactionCambios + memoryCambios + verbalCambios + visualCambios;
  const promedio = Math.round(sum / 4);

  
  numbersValor.textContent = promedio;
}


continueButton.addEventListener('click', () => {
  variadoSummary();
  actualizarPromedio();
});


//Cambiar el color del contenedor del Result dependiendo del valor en el Summary

