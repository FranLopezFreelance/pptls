function aleatorio(minimo, maximo){
  var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
  return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,4);

opcionUsuario = prompt("¿Qué eliges?:\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4", 0);

while(opcionUsuario < 0  || opcionUsuario > 4){
  opcionUsuario = prompt("Vamos...  Elige bien!\n¿Qué eliges?:\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4", 0);
}
  if(opcionUsuario){
    alert("Elegiste " + opciones[opcionUsuario]);
    alert("Js eligió " + opciones[opcionMaquina]);

    if(opcionUsuario == opcionMaquina){
        alert("Empate!");
    }else if((opcionUsuario == tijera & opcionMaquina == papel) 
      || (opcionUsuario == papel & opcionMaquina == piedra)
      || (opcionUsuario == piedra & opcionMaquina == lagarto)
      || (opcionUsuario == lagarto & opcionMaquina == spock)
      || (opcionUsuario == spock & opcionMaquina == tijera)
      || (opcionUsuario == tijera & opcionMaquina == lagarto)
      || (opcionUsuario == lagarto & opcionMaquina == papel)
      || (opcionUsuario == papel & opcionMaquina == spock)
      || (opcionUsuario == spock & opcionMaquina == piedra)
      || (opcionUsuario == piedra & opcionMaquina == tijera)){
        alert("Ganaste!");
    }else{
      alert("Perdiste!");
    }
  }else{
    alert("LE diste a Cancelar... Quiere decir que te rindes...  PERDISTE! =)");
  }

