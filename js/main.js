let segundos = 0;
let tiempo;
let tiempoCorriendo = false;

// Funciones
const inicioReloj = () => {
  if(tiempoCorriendo) {
    pausarCronometro()
  } else {
    iniciarCronometro()
  }
}

const iniciarCronometro = () => {
  if (!tiempo) {
    tiempo = setInterval(actualizarTiempo, 1000);
    tiempoCorriendo = true
  }
  cambiarEstadoBoton()
};

const pausarCronometro = () => {
  clearInterval(tiempo);
  tiempo = null;
  tiempoCorriendo = false;
  cambiarEstadoBoton()
};

const resetearCronometro = () => {
  clearInterval(tiempo);
  timer = null;
  segundos = 0;
  actualizarTiempo();
  iniciarBoton.innerText = 'Iniciar';
};

const actualizarTiempo = () => {
  segundos++;
  const hora = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const contadorSegundos = segundos % 60;

  document.querySelector("#tiempo").innerHTML = `
    ${formatearTiempo(hora)}:${formatearTiempo(minutos)}:${formatearTiempo(
    contadorSegundos
  )} 
    `;
};

const cambiarEstadoBoton = () => {
  const iniciarBoton = document.querySelector("#iniciarBoton");
  iniciarBoton.innerText = tiempoCorriendo ? 'Iniciar' : 'Reanudar';
}

const formatearTiempo = (tiempo) => {
  return tiempo < 10 ? `0${tiempo}` : tiempo;
};
