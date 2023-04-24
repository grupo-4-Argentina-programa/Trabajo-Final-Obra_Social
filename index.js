const form = document.querySelector("form");
form.addEventListener("submit", cotizarPlan);

function cotizarPlan(event) {
  const nombre = document.querySelector('#nombre').value;
  const edad = Number(document.querySelector('#edad').value);
  event.preventDefault();
  const aportes = Number(document.querySelector('#aportes').value);

  let costoFinalPlanjoven = 18000 - aportes;
  if (edad < 30) {
    costoFinalPlanjoven = costoFinalPlanjoven * 0.9;
  }
  if (costoFinalPlanjoven < 10000) {
    costoFinalPlanjoven = 15000
  }

  const cotizacionPlanjoven = `Tu plan Joven quedaría al día de la fecha en $${costoFinalPlanjoven}.`;
  document.querySelector('#planjoven').textContent = cotizacionPlanjoven;

  let costoFinalPlanbasico = 20000 - aportes;
  if (edad < 30) {
    costoFinalPlanbasico = costoFinalPlanbasico * 0.9;
  }
  if (costoFinalPlanbasico < 18000) {
    costoFinalPlanbasico = 20000
  }

  const cotizacionPlanbasico = `Tu plan basico quedaría al día de la fecha en $${costoFinalPlanbasico}.`;
  document.querySelector('#planbasico').textContent = cotizacionPlanbasico;

  let costoFinalPlanpremium = 25000 - aportes;

  if (edad < 30) {
    costoFinalPlanpremium = costoFinalPlanpremium * 0.9;
  }
  if (costoFinalPlanpremium < 23000) {
    costoFinalPlanpremium = 25000;
  }

  const cotizacionPlanpremium = `Tu plan premium quedaría al día de la fecha en $${costoFinalPlanpremium}.`;
  document.querySelector('#planpremium').textContent = cotizacionPlanpremium;

  const planjoven = document.querySelector('#planjoven');
  const planbasico = document.querySelector('#planbasico');
  const planpremium = document.querySelector('#planpremium');

  columna1.innerHTML = "";
  columna2.innerHTML = "";
  columna3.innerHTML = "";

  const cotizacion1 = document.createElement('p');
  cotizacion1.textContent = cotizacionPlanjoven;
  columna1.appendChild(cotizacion1);

  const cotizacion2 = document.createElement('p');
  cotizacion2.textContent = cotizacionPlanbasico;
  columna2.appendChild(cotizacion2);

  const cotizacion3 = document.createElement('p');
  cotizacion3.textContent = cotizacionPlanpremium;
  columna3.appendChild(cotizacion3);
}

//jQuery navbar
$(window).scroll(function () {
  let navbar = $('.navbar');
  if (window.scrollY > 0) {
    navbar.addClass('transparent');
  } else {
    navbar.removeClass('transparent');
  }
});

//validateJS
window.addEventListener('load', () => {
  let validadorFormulario = new FormValidator('registrarDatos', [{
    name: 'Nombre',
    display: 'Nombre',
    rules: 'required|min_length[10]'
  }]);
})