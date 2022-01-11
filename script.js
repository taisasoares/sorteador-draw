function gerarNumeroAleatorio(numVezes, numMinimo, numMaximo, resultado) {

  var numVezes = parseInt(document.getElementById("iptVezes").value);
  var numMinimo = parseInt(document.getElementById("iptMinimo").value);
  var numMaximo = parseInt(document.getElementById("iptMaximo").value);
  var resultado, i = 0;



  do {

    if (numMinimo < 0) {
      var numeroGerado = Math.floor((Math.random() * (numMaximo - (2 * numMinimo)) + numMinimo));

      while (numeroGerado > numMaximo) {
        numeroGerado = Math.floor((Math.random() * (numMaximo - (2 * numMinimo)) + numMinimo));
      }
    }
    else {
      var numeroGerado = Math.floor((Math.random() * ((numMaximo + 1) - numMinimo)) + numMinimo);

      while (numeroGerado > numMaximo) {
        numeroGerado = Math.floor((Math.random() * ((numMaximo + 1) - numMinimo)) + numMinimo);
      }
    }

    console.log(numeroGerado);
    if (i == 0) {
      resultado = numeroGerado;
    }
    else {
      resultado = resultado + ", " + numeroGerado;
    }

    i++;
  } while (i < numVezes);

  var data = new Date();
  var dataHora = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear() + " às " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();

  dataHoraSorteio = dataHora;

  document.getElementById("numeroGerado").innerText = resultado;
  document.getElementById("dataHora").innerText = dataHoraSorteio;
}