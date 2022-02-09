let footerDate = document.getElementById("tiempo");

const timerT = Date.now();
const todayH = new Date(timerT).getFullYear();

footerDate.innerHTML = `Todos los derechos reserrvados a los creadores de la pagina - ${todayH}`