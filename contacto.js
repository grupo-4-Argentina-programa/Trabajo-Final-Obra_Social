//funcion validar
function validar() {
  
    $('#nombre-error').html('');
    $('#Email').html('');
    $('#-error').html('');
  
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