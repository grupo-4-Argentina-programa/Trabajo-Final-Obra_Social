const form = document.querySelector("form");
form.addEventListener("submit", cotizarPlan);

function cotizarPlan(event) {
  const nombre = document.querySelector('#nombre').value;
  const edad = Number(document.querySelector('#edad').value);
  event.preventDefault();
  const sueldo = Number(document.querySelector('#sueldo').value);
  const porcentajePlanJoven = 0.1;
  const porcentajePlanBasico = 0.2;
  const porcentajePlanPremium = 0.3;

  let costoFinalPlanjoven = Math.min(sueldo * porcentajePlanJoven);
  if (edad < 30) {
    costoFinalPlanjoven = costoFinalPlanjoven * 0.9;
  }


  const cotizacionPlanjoven = `Tu plan Joven quedaría al día de la fecha en $${costoFinalPlanjoven}.`;
  document.querySelector('#planjoven').textContent = cotizacionPlanjoven;
  const planJoven = document.querySelector('#planjoven');
  planJoven.innerHTML = `
  <p><b>${cotizacionPlanjoven}</b></p>
  <h5>Plan Joven</h5>
  <br>
  <h6>Beneficios</h6>
  <br>
  <ul>
      <li>Consultas médicas las 24hs desde tu celu</li>
      <li>100% de cobertura en métodos anticonceptivos</li>
      <li>Cobertura nacional e internacional</li>
  </ul>
  <a href="./contacto.html"><button type="submit">Estoy interesado/a!</button></a>
  <br>
  </div>
`;



  let costoFinalPlanbasico = Math.min(sueldo * porcentajePlanBasico);
  if (edad < 30) {
    costoFinalPlanbasico = costoFinalPlanbasico * 0.9;
  }


  const cotizacionPlanbasico = `Tu plan basico quedaría al día de la fecha en $${costoFinalPlanbasico}.`;
  document.querySelector('#planbasico').textContent = cotizacionPlanbasico;
  const planBasico = document.querySelector('#planbasico');
  planBasico.innerHTML = `
  <p><b>${cotizacionPlanbasico}</b></p>
  <h5>Plan basico</h5>
  <br>
  <h6>Beneficios</h6>
  <br>
  <ul>
      <li>Bonificación por 3 o más integrantes</li>
      <li>Telemedicina las 24hs sin cargo</li>
      <li>Tramites on-line y credencial digital</li>
      <li>Médico a domicilio <b>sin cargo</b></li>
  </ul>
  <a href="./contacto.html"><button type="submit">Estoy interesado/a!</button></a>
  <br>

`;

  let costoFinalPlanpremium = Math.min(sueldo * porcentajePlanPremium);
  if (edad < 30) {
    costoFinalPlanpremium = costoFinalPlanpremium * 0.9;
  }


  const cotizacionPlanpremium = ` Tu plan premium quedaría al día de la fecha en $${costoFinalPlanpremium}.`;
  document.querySelector('#planpremium').textContent = cotizacionPlanpremium;
  const Planpremium = document.querySelector('#planpremium');
  Planpremium.innerHTML = `
  <p><b>${cotizacionPlanpremium}</b></p>
  <h5>Plan Premium</h5>
  <br>
  <h6>Beneficios</h6>
  <br>
  <ul>
      <li>Cobertura integral</li>
      <li>Médico a domicilio <b>sin cargo</b></li>
      <li>Máximos valores de reintegros</li>
      <li>Asistencia al viajero</li>
  </ul>
  <a href="./contacto.html"><button type="submit">Estoy interesado/a!</button></a>
  <br>
`;

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

//scroll hacia el resultado de presupuesto

function scrollToResultado() {
  const resultadoSection = document.getElementById('resultado');
  resultadoSection.scrollIntoView({ behavior: 'smooth' });
}


//funcion validar
function validar() {
  
  $('#Nombre-error').html('');
  $('#Email').html('');
  $('#Dni-error').html('');
  $('#Edad-error').html('');
  $('#Sueldo-error').html('');

if($('#nombre').val() == '') {
  $('#Nombre-error').html('completar este campo');
}

if($('#email').val() == '') {
  $('#Emal-error').html('completar este campo');
}

if($('#dni').val() == '') {
  $('#Dni-error').html('completar este campo');
}

if($('#edad').val() == '') {
  $('#Edad-error').html('completar este campo');
}

if($('#sueldo').val() == '') {
  $('#Sueldo-error').html('completar este campo');
}
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
