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

  const cotizacionPlanjoven = `Tu plan Joven quedaría al día de la fecha en $${costoFinalPlanjoven}.`;
  document.querySelector('#planjoven').textContent = cotizacionPlanjoven;

  let costoFinalPlanbasico = 20000 - aportes;
  if (edad < 30) {
    costoFinalPlanbasico = costoFinalPlanbasico * 0.9;

  }

  const cotizacionPlanbasico = `Tu plan basico quedaría al día de la fecha en $${costoFinalPlanbasico}.`;
  document.querySelector('#planbasico').textContent = cotizacionPlanbasico;

  let costoFinalPlanpremium = 25000 - aportes;

  if (edad < 30) {
    costoFinalPlanpremium = costoFinalPlanpremium * 0.9;
  }

  const cotizacionPlanpremium = `Tu plan premiun quedaría al día de la fecha en $${costoFinalPlanpremium}.`;
  document.querySelector('#planpremium').textContent = cotizacionPlanbasico;


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
