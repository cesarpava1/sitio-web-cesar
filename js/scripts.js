var arr_codigos = [
  {
    codigo: "830122566",
    valor: 201000
  },
  { 
    codigo: "47484848",
    valor: 100000
  },
  {
    codigo: "4646464",
    valor: 800000
  }
];


function consultarCodigo(codigo) {
  
  var obtener_codigo = arr_codigos.filter(function(element){
    return element.codigo == codigo;
  });
  
  if(obtener_codigo.length > 0) {
    return obtener_codigo[0];
  } else {
    return false;
  }
}


var codigo = "830122566";
var respuesta_codigo = consultarCodigo(codigo);
if(respuesta_codigo) {
  console.log(respuesta_codigo.valor);
  var valor_pagar = parseInt(250000);
  if(valor_pagar >= parseInt(respuesta_codigo.valor)) {
    console.log("El pago fue exitoso");
  } else {
    console.log("Saldo insuficiente");
  }
} else {
  console.log("El código está vencido");
}