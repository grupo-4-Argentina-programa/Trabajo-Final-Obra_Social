var registroBaseDatos= []
var registroCliente=[]
function guardarDato{
    registroCliente += document.getElementsByid(nombre).value;
    registroCliente += document.getElementsByid(email).value;
    registroCliente += document.getElementsByid(pref1).value;
    registroCliente += document.getElementsByid(telefono).value;
    registroCliente += document.getElementsByid(horario1).value;
    registroCliente += document.getElementsByid(horario2).value;
}
function enviar(){
    guardarDato();
    registroBaseDatos+=registroCliente;
    console.log(registroBaseDatos);

}