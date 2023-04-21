const form = document.querySelector("form");
form.addEventListener("submit", cotizarPlan);


function cotizarPlan(event) {
    const nombre = document.querySelector('#nombre').value;
    const edad = Number(document.querySelector('#edad').value);
    const email = document.querySelector('#email').value;
    event.preventDefault();
    const aportes = Number(document.querySelector('#aportes').value);
    
    const planes = [
        {nombre: "Plan Joven 2000", costo: 18000},
        { nombre: "Plan Básico 3000", costo: 25000},
        { nombre: "Plan Premium 5000", costo: 45000}
    ];
    
    const cotizaciones = planes.map(plan => {
    let costoFinal = plan.costo - aportes;

   

    return ` ${plan.nombre} : $${costoFinal}.`;
})

    const resultado = cotizaciones.join('\n');
    document.querySelector('#resultado').textContent = resultado;

}