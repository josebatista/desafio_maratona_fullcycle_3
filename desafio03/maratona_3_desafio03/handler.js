'use strict';

function soma(params) {
  if (!params.a || !params.b) {
    return { "resultado": 0, "mensagem": "Favor enviar os parametros na url no formato: ?a=VALOR&b=VALOR" };
  }
  return { "resultado": (params.a * 1) + (params.b * 1), "MaratonaFullCycle": "#eumecomprometo" };
}

exports.soma = soma;
